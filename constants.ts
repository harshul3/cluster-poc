export const PUPPETEER_DEFAULT_ARGS = [
  "--disable-infobars",
  "allow-modals",
  "--disable-dev-shm-usage",
  "--no-sandbox",
  "--disable-features=IsolateOrigins,site-per-process",
];

export interface IReportDetails {
  accessToken: string;
  embedUrl: string;
  reportIdentifier: string;
  filters?: any;
  pages: string;
  reportUrlFilter?: string;
  bookmarkGuid?: string;
  previewId?: string;
  reportFormat?: string;
  enableHiddenPages?: boolean;
}

export const reportDetails: IReportDetails = {
  accessToken:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1HTHFqOThWTkxvWGFGZnBKQ0JwZ0I0SmFLcyIsImtpZCI6Ik1HTHFqOThWTkxvWGFGZnBKQ0JwZ0I0SmFLcyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvOWY4NGVlNGItYmVlMy00MmY3LWI4NGMtZTU3ZTVlOTJmMTA1LyIsImlhdCI6MTcyMDc4NjUzMCwibmJmIjoxNzIwNzg2NTMwLCJleHAiOjE3MjA3OTEwMDUsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84WEFBQUFySXJuN1dJVEwyei91VCtPdllyMDE4N202RXBBdk9TaGZQODhaeE1kN3NsYnowMTdlaWpMTDlBUi9yWnNYMTdjQllQdGx3eWhqaTR5b21tVWFhREQ1ZllDeXNFdHR1KzBiSStaa3NBbURNST0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiYTc3YmQ3MDItYjdjYS00OTljLWIxNzYtYjQxOTA0NjVlZmQ5IiwiYXBwaWRhY3IiOiIxIiwiZmFtaWx5X25hbWUiOiJTaGFybWEiLCJnaXZlbl9uYW1lIjoiSGFyc2h1bCIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjI0MDU6MjAxOjVjMDk6ZTE1MTphYzBkOmI0MDQ6MWYwYzpjNTk2IiwibmFtZSI6IkhhcnNodWwgU2hhcm1hIiwib2lkIjoiNzJmYjg3MzYtNTcwZC00YWMxLWE5YjYtNjVlMmE3M2MwZWEzIiwicHVpZCI6IjEwMDMyMDAzN0NBQzU5RjciLCJyaCI6IjAuQVVZQVMtNkVuLU8tOTBLNFRPVi1YcEx4QlFrQUFBQUFBQUFBd0FBQUFBQUFBQUJHQUJzLiIsInNjcCI6IkFwcC5SZWFkLkFsbCBEYXNoYm9hcmQuUmVhZC5BbGwgRGF0YWZsb3cuUmVhZC5BbGwgRGF0YXNldC5SZWFkLkFsbCBEYXRhc2V0LlJlYWRXcml0ZS5BbGwgTGFrZWhvdXNlLlJlYWRXcml0ZS5BbGwgUmVwb3J0LlJlYWQuQWxsIFdvcmtzcGFjZS5SZWFkLkFsbCIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6IkJDR1FjUGlzdUlZR3djX1QzdThLY3UwcERPa0ZTTUNyM0k5R1U4anBFbzAiLCJ0aWQiOiI5Zjg0ZWU0Yi1iZWUzLTQyZjctYjg0Yy1lNTdlNWU5MmYxMDUiLCJ1bmlxdWVfbmFtZSI6IkhhcnNodWxTQGx1bWVsLmNvbSIsInVwbiI6IkhhcnNodWxTQGx1bWVsLmNvbSIsInV0aSI6IlBFb3JLOHUtYlVHS2Z3ZnZIandQQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfaWRyZWwiOiIxIDIyIn0.nBduVgdCeYjBxKTeY_LfyAeaLfuOQB_EG41XK_N1jU8JNEYnmvHNT2d_F6pWOJLiGrfw2HOQd5WygeEvsAPER00iO7tzprj-99GPsj1wFwCLRHaMWwPA3aowjsOEqtsNgYAoF5nlPAIzPgkeAWEY9iPQztSaKm1dxDliRzJzc2NxQBP6DWNWQ8Wn6mNAeRTTAj0YfY2CWvdLlSn8qIFw5j5jzKFZrOdQbB8j1ifU8g0SEKBNsvFldFYY7juCvX7DmI-fr_L7JGmYKWyFwzTWy2r0AXP_fQurH2WP88ky01UOJO5o45dRIDoD1gRSS06FCUvcF6BgGXoSTQifJ3xu1w",
  embedUrl:
    "https://app.powerbi.com/reportEmbed?reportId=aca24c3e-cd4b-4b47-be64-a3a3d392e796&groupId=294398e2-0e31-42e2-a293-85dea7555b2b&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
  reportIdentifier: "aca24c3e-cd4b-4b47-be64-a3a3d392e796",
  pages: "all",
};

export const r1 = {
  $schema: "http://powerbi.com/product/schema#basic",
  target: {
    hierarchy: "Date Hierarchy",
    hierarchyLevel: "Year",
    table: "[Dim] Date",
  },
  operator: "In",
  values: [2021, 2022, 2023],
};

export const r2 = {
  $schema: "http://powerbi.com/product/schema#basic",
  target: {
    hierarchy: "Date Hierarchy",
    hierarchyLevel: "Year",
    table: "[Dim] Date",
  },
  operator: "In",
  values: [2024],
};

export const r3 = {
  $schema: "http://powerbi.com/product/schema#basic",
  target: {
    hierarchy: "Date Hierarchy",
    hierarchyLevel: "Year",
    table: "[Dim] Date",
  },
  operator: "In",
  values: [2020, 2021],
};

export const r4 = {
  $schema: "http://powerbi.com/product/schema#basic",
  target: {
    hierarchy: "Date Hierarchy",
    hierarchyLevel: "Year",
    table: "[Dim] Date",
  },
  operator: "In",
  values: [2023, 2024],
};

export const r5 = {
  $schema: "http://powerbi.com/product/schema#basic",
  target: {
    hierarchy: "Date Hierarchy",
    hierarchyLevel: "Year",
    table: "[Dim] Date",
  },
  operator: "In",
  values: [2020, 2024],
};

export const detail1 = {
  report: reportDetails,
  pageNo: 1,
  filters: [r1, r2, r3, r4, r5],
};

export const detail2 = {
  report: reportDetails,
  pageNo: 2,
  filters: [r1, r3],
};

export const detail3 = {
  report: reportDetails,
  pageNo: 3,
  filters: [r1, r2, r3],
};

// 2nd report

export const report2Details: IReportDetails = {
  accessToken:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1HTHFqOThWTkxvWGFGZnBKQ0JwZ0I0SmFLcyIsImtpZCI6Ik1HTHFqOThWTkxvWGFGZnBKQ0JwZ0I0SmFLcyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvOWY4NGVlNGItYmVlMy00MmY3LWI4NGMtZTU3ZTVlOTJmMTA1LyIsImlhdCI6MTcyMDc4NjUzMCwibmJmIjoxNzIwNzg2NTMwLCJleHAiOjE3MjA3OTEwMDUsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84WEFBQUFySXJuN1dJVEwyei91VCtPdllyMDE4N202RXBBdk9TaGZQODhaeE1kN3NsYnowMTdlaWpMTDlBUi9yWnNYMTdjQllQdGx3eWhqaTR5b21tVWFhREQ1ZllDeXNFdHR1KzBiSStaa3NBbURNST0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiYTc3YmQ3MDItYjdjYS00OTljLWIxNzYtYjQxOTA0NjVlZmQ5IiwiYXBwaWRhY3IiOiIxIiwiZmFtaWx5X25hbWUiOiJTaGFybWEiLCJnaXZlbl9uYW1lIjoiSGFyc2h1bCIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjI0MDU6MjAxOjVjMDk6ZTE1MTphYzBkOmI0MDQ6MWYwYzpjNTk2IiwibmFtZSI6IkhhcnNodWwgU2hhcm1hIiwib2lkIjoiNzJmYjg3MzYtNTcwZC00YWMxLWE5YjYtNjVlMmE3M2MwZWEzIiwicHVpZCI6IjEwMDMyMDAzN0NBQzU5RjciLCJyaCI6IjAuQVVZQVMtNkVuLU8tOTBLNFRPVi1YcEx4QlFrQUFBQUFBQUFBd0FBQUFBQUFBQUJHQUJzLiIsInNjcCI6IkFwcC5SZWFkLkFsbCBEYXNoYm9hcmQuUmVhZC5BbGwgRGF0YWZsb3cuUmVhZC5BbGwgRGF0YXNldC5SZWFkLkFsbCBEYXRhc2V0LlJlYWRXcml0ZS5BbGwgTGFrZWhvdXNlLlJlYWRXcml0ZS5BbGwgUmVwb3J0LlJlYWQuQWxsIFdvcmtzcGFjZS5SZWFkLkFsbCIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6IkJDR1FjUGlzdUlZR3djX1QzdThLY3UwcERPa0ZTTUNyM0k5R1U4anBFbzAiLCJ0aWQiOiI5Zjg0ZWU0Yi1iZWUzLTQyZjctYjg0Yy1lNTdlNWU5MmYxMDUiLCJ1bmlxdWVfbmFtZSI6IkhhcnNodWxTQGx1bWVsLmNvbSIsInVwbiI6IkhhcnNodWxTQGx1bWVsLmNvbSIsInV0aSI6IlBFb3JLOHUtYlVHS2Z3ZnZIandQQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfaWRyZWwiOiIxIDIyIn0.nBduVgdCeYjBxKTeY_LfyAeaLfuOQB_EG41XK_N1jU8JNEYnmvHNT2d_F6pWOJLiGrfw2HOQd5WygeEvsAPER00iO7tzprj-99GPsj1wFwCLRHaMWwPA3aowjsOEqtsNgYAoF5nlPAIzPgkeAWEY9iPQztSaKm1dxDliRzJzc2NxQBP6DWNWQ8Wn6mNAeRTTAj0YfY2CWvdLlSn8qIFw5j5jzKFZrOdQbB8j1ifU8g0SEKBNsvFldFYY7juCvX7DmI-fr_L7JGmYKWyFwzTWy2r0AXP_fQurH2WP88ky01UOJO5o45dRIDoD1gRSS06FCUvcF6BgGXoSTQifJ3xu1w",
  embedUrl:
    "https://app.powerbi.com/reportEmbed?reportId=831468c5-af7b-4c32-af73-8b69700bdce7&groupId=294398e2-0e31-42e2-a293-85dea7555b2b&w=2&pageName=ReportSection7113f9020cba331db2a1&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
  reportIdentifier: "831468c5-af7b-4c32-af73-8b69700bdce7",
  pages: "all",
};

export const f1 = {
  $schema: "http://powerbi.com/product/schema#basic",
  target: {
    table: "[Dim] Chart of Accounts",
    column: "AccountType",
  },
  operator: "In",
  values: ["Revenue"],
};

export const f2 = {
  $schema: "http://powerbi.com/product/schema#basic",
  target: {
    table: "[Dim] Chart of Accounts",
    column: "AccountType",
  },
  operator: "In",
  values: ["COGS"],
};

export const f3 = {
  $schema: "http://powerbi.com/product/schema#basic",
  target: {
    table: "[Dim] Chart of Accounts",
    column: "AccountType",
  },
  operator: "In",
  values: ["Liabilities"],
};

export const f4 = {
  $schema: "http://powerbi.com/product/schema#basic",
  target: {
    table: "[Dim] Chart of Accounts",
    column: "AccountType",
  },
  operator: "In",
  values: ["Operating Expenses"],
};

export const f5 = {
  $schema: "http://powerbi.com/product/schema#basic",
  target: {
    table: "[Dim] Chart of Accounts",
    column: "AccountType",
  },
  operator: "In",
  values: ["Non-Operating Expenses"],
};

export const f6 = {
  $schema: "http://powerbi.com/product/schema#basic",
  target: {
    table: "[Dim] Chart of Accounts",
    column: "AccountType",
  },
  operator: "In",
  values: ["COGS", "Revenue"],
};

export const f7 = {
  $schema: "http://powerbi.com/product/schema#basic",
  target: {
    table: "[Dim] Chart of Accounts",
    column: "AccountType",
  },
  operator: "In",
  values: ["COGS", "Liabilities"],
};

export const f8 = {
  $schema: "http://powerbi.com/product/schema#basic",
  target: {
    table: "[Dim] Chart of Accounts",
    column: "AccountType",
  },
  operator: "In",
  values: ["COGS", "Operating Expenses"],
};

export const f9 = {
  $schema: "http://powerbi.com/product/schema#basic",
  target: {
    table: "[Dim] Chart of Accounts",
    column: "AccountType",
  },
  operator: "In",
  values: ["COGS", "Non-Operating Expenses"],
};

export const f10 = {
  $schema: "http://powerbi.com/product/schema#basic",
  target: {
    table: "[Dim] Chart of Accounts",
    column: "AccountType",
  },
  operator: "In",
  values: ["Revenue", "Liabilities"],
};

export const f11 = {
  $schema: "http://powerbi.com/product/schema#basic",
  target: {
    table: "[Dim] Chart of Accounts",
    column: "AccountType",
  },
  operator: "In",
  values: ["Revenue", "COGS"],
};

export const f12 = {
  $schema: "http://powerbi.com/product/schema#basic",
  target: {
    table: "[Dim] Chart of Accounts",
    column: "AccountType",
  },
  operator: "In",
  values: ["Revenue", "Operating Expenses"],
};

export const f13 = {
  $schema: "http://powerbi.com/product/schema#basic",
  target: {
    table: "[Dim] Chart of Accounts",
    column: "AccountType",
  },
  operator: "In",
  values: ["Revenue", "Non-Operating Expenses"],
};

export const f14 = {
  $schema: "http://powerbi.com/product/schema#basic",
  target: {
    table: "[Dim] Chart of Accounts",
    column: "AccountType",
  },
  operator: "In",
  values: ["COGS", "Liabilities", "Revenue"],
};

export const f15 = {
  $schema: "http://powerbi.com/product/schema#basic",
  target: {
    table: "[Dim] Chart of Accounts",
    column: "AccountType",
  },
  operator: "In",
  values: ["COGS", "Operating Expenses", "Non-Operating Expenses"],
};

export const f16 = {
  $schema: "http://powerbi.com/product/schema#basic",
  target: {
    table: "[Dim] Chart of Accounts",
    column: "AccountType",
  },
  operator: "In",
  values: ["Revenue", "Operating Expenses", "Non-Operating Expenses"],
};

export const f17 = {
  $schema: "http://powerbi.com/product/schema#basic",
  target: {
    table: "[Dim] Chart of Accounts",
    column: "AccountType",
  },
  operator: "In",
  values: ["Liabilities", "Operating Expenses", "Non-Operating Expenses"],
};

export const f18 = {
  $schema: "http://powerbi.com/product/schema#basic",
  target: {
    table: "[Dim] Chart of Accounts",
    column: "AccountType",
  },
  operator: "In",
  values: ["COGS", "Liabilities", "Revenue", "Operating Expenses"],
};

export const f19 = {
  $schema: "http://powerbi.com/product/schema#basic",
  target: {
    table: "[Dim] Chart of Accounts",
    column: "AccountType",
  },
  operator: "In",
  values: ["COGS", "Liabilities", "Revenue", "Non-Operating Expenses"],
};

export const f20 = {
  $schema: "http://powerbi.com/product/schema#basic",
  target: {
    table: "[Dim] Chart of Accounts",
    column: "AccountType",
  },
  operator: "In",
  values: [
    "COGS",
    "Liabilities",
    "Revenue",
    "Operating Expenses",
    "Non-Operating Expenses",
  ],
};

// export const r2detail1 = {
//   report: report2Details,
//   filters: [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10],
// };

// export const r2detail2 = {
//   report: report2Details,
//   filters: [f11, f12, f13, f14, f15, f16, f17, f18, f19, f20],
// };

//######### FILTERS ################################################################
interface Filter {
  $schema: string;
  target: {
    table: string;
    column: string;
  };
  operator: string;
  values: string[];
}

const filterTemplate: Filter = {
  $schema: "http://powerbi.com/product/schema#basic",
  target: {
    table: "[Dim] Chart of Accounts",
    column: "AccountType",
  },
  operator: "In",
  values: [],
};

// Function to generate combinations with multiple filter values
function getCombinations(values: string[], length: number): string[][] {
  const combinations: string[][] = [];

  function generate(prefix: string[], index: number) {
    if (prefix.length === length) {
      combinations.push(prefix);
      return;
    }

    for (let i = index; i < values.length; i++) {
      if (!prefix.includes(values[i])) {
        // Ensure no repetition within a combination
        generate([...prefix, values[i]], i);
      }
    }
  }

  generate([], 0);
  return combinations;
}

// Values to use for combinations
const values = [
  "COGS",
  "Liabilities",
  "Revenue",
  "Operating Expenses",
  "Non-Operating Expenses",
];

export const allFilters: Filter[] = [];

for (let i = 1; i < 20; i++) {  // this will generate combo of 1 to 5 values, total = 31 filters
  // Generate combinations
  const combinations = getCombinations(values, i);

  // Create and log f20 objects for each combination
  combinations.forEach((combo) => {
    const fit: Filter = { ...filterTemplate, values: combo };
   allFilters.push(fit);
  });
}
