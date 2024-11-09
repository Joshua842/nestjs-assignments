import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
  @Get("prime/:number")
  prime(@Param('number') number: string): string {
    const num = parseInt(number, 10);

    // Validate input
    if (isNaN(num) || num <= 0) {
      return "You must provide a positive integer";
    }

    function isPrime(n: number): boolean {
      if (n <= 1) return false;  // 0 and 1 are not prime
      if (n === 2 || n === 3) return true;  // 2 and 3 are prime numbers
      if (n % 2 === 0 || n % 3 === 0) return false;  // Even numbers and multiples of 3 are not prime
      for (let i = 5; i * i <= n; i += 6) {  // Check divisibility starting from 5, skipping even numbers and multiples of 3
        if (n % i === 0 || n % (i + 2) === 0) return false;
      }
      return true;
    }

    return `isPrime: ${isPrime(num)}`;
  }
}
