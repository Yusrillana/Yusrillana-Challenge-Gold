export function isBudgetBalanced(needs, savings, wants) {
    return needs > savings && savings >= wants && wants < needs;
  }
  
  // ... fungsi utilitas keuangan lainnya
  