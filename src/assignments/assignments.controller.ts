import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
  @Get('fibonacci/:num')
  fibonacci(@Param('num') num: string): string | number[] {
    const n = parseInt(num, 10);

    // Validate the input
    if (isNaN(n) || n <= 0) return "Please provide a positive integer.";

    // Handle base cases
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const sequence = [0, 1];
    
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 2] + sequence[i - 1]);
    }

    return sequence;
  }
}
