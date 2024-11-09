import { Controller, Param, Get } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
  @Get('factorial/:n')
  factorial(@Param('n') n: string): string {
    const num = parseInt(n, 10);

    // Input validation
    if (isNaN(num) || num < 0) {
      return 'Please provide a positive integer.';
    }

    // Iterative factorial calculation (no recursion)
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }

    return `factorial: ${result}`;
  }
}
