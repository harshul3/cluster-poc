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
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1HTHFqOThWTkxvWGFGZnBKQ0JwZ0I0SmFLcyIsImtpZCI6Ik1HTHFqOThWTkxvWGFGZnBKQ0JwZ0I0SmFLcyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvOWY4NGVlNGItYmVlMy00MmY3LWI4NGMtZTU3ZTVlOTJmMTA1LyIsImlhdCI6MTcyMTk2NjU4NiwibmJmIjoxNzIxOTY2NTg2LCJleHAiOjE3MjE5NzE1ODYsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84WEFBQUFCRS9vdVJJZ05rTU40NkRVdnFwWlRLWElBYTZYbGlBTDllODNiOXR2NFBDOVB5a0hUbUhMOGpwMUVKS01ueTRMVnVnMUE4Zk1sUUxwNjBib2JuQmF0VTJCVXlQZUlpQXRIeEFoc21BenZUVT0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiYTc3YmQ3MDItYjdjYS00OTljLWIxNzYtYjQxOTA0NjVlZmQ5IiwiYXBwaWRhY3IiOiIxIiwiZmFtaWx5X25hbWUiOiJTaGFybWEiLCJnaXZlbl9uYW1lIjoiSGFyc2h1bCIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjI3LjU4LjI1MC4xMTIiLCJuYW1lIjoiSGFyc2h1bCBTaGFybWEiLCJvaWQiOiI3MmZiODczNi01NzBkLTRhYzEtYTliNi02NWUyYTczYzBlYTMiLCJwdWlkIjoiMTAwMzIwMDM3Q0FDNTlGNyIsInJoIjoiMC5BVVlBUy02RW4tTy05MEs0VE9WLVhwTHhCUWtBQUFBQUFBQUF3QUFBQUFBQUFBQkdBQnMuIiwic2NwIjoiQXBwLlJlYWQuQWxsIERhc2hib2FyZC5SZWFkLkFsbCBEYXRhZmxvdy5SZWFkLkFsbCBEYXRhc2V0LlJlYWQuQWxsIERhdGFzZXQuUmVhZFdyaXRlLkFsbCBMYWtlaG91c2UuUmVhZFdyaXRlLkFsbCBSZXBvcnQuUmVhZC5BbGwgV29ya3NwYWNlLlJlYWQuQWxsIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiQkNHUWNQaXN1SVlHd2NfVDN1OEtjdTBwRE9rRlNNQ3IzSTlHVThqcEVvMCIsInRpZCI6IjlmODRlZTRiLWJlZTMtNDJmNy1iODRjLWU1N2U1ZTkyZjEwNSIsInVuaXF1ZV9uYW1lIjoiSGFyc2h1bFNAbHVtZWwuY29tIiwidXBuIjoiSGFyc2h1bFNAbHVtZWwuY29tIiwidXRpIjoibVg0RXkyX0gya3VfUnJjTThiUjdBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19pZHJlbCI6IjI4IDEifQ.iTMORWpVCB7hh9ARF27gApZwQsiuiXs9Y57la-dLDkmqpiLJVa7yfQl-fkx2CO6JiVxjVWCdfaHDEG0E59TsUPuIIgRNnmO9zvRC3gTXKWSMJJShTRH5Ob22D7-RK_NXJ16qaE5Qu2lPZq9PYR8O7KDiKcOVwLniK9SQPTWiDZdBJWO5U1IzqgLk4-PY8IMblvPYhvyZTMSGHxIqlQO6qMnuWDz-rZd0aFQaXfEWRRrM-qbCVKlqmnKL-DQd4bd1vzunuw6UG7WaoU7AaecqHYJTWExscg4jiA-fWB-QPI-oFhG6OiItfqd4gm6u3wCqpRLRZIpA8OeZy55l7wO29g",
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
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1HTHFqOThWTkxvWGFGZnBKQ0JwZ0I0SmFLcyIsImtpZCI6Ik1HTHFqOThWTkxvWGFGZnBKQ0JwZ0I0SmFLcyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvOWY4NGVlNGItYmVlMy00MmY3LWI4NGMtZTU3ZTVlOTJmMTA1LyIsImlhdCI6MTcyMTk2NjU4NiwibmJmIjoxNzIxOTY2NTg2LCJleHAiOjE3MjE5NzE1ODYsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84WEFBQUFCRS9vdVJJZ05rTU40NkRVdnFwWlRLWElBYTZYbGlBTDllODNiOXR2NFBDOVB5a0hUbUhMOGpwMUVKS01ueTRMVnVnMUE4Zk1sUUxwNjBib2JuQmF0VTJCVXlQZUlpQXRIeEFoc21BenZUVT0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiYTc3YmQ3MDItYjdjYS00OTljLWIxNzYtYjQxOTA0NjVlZmQ5IiwiYXBwaWRhY3IiOiIxIiwiZmFtaWx5X25hbWUiOiJTaGFybWEiLCJnaXZlbl9uYW1lIjoiSGFyc2h1bCIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjI3LjU4LjI1MC4xMTIiLCJuYW1lIjoiSGFyc2h1bCBTaGFybWEiLCJvaWQiOiI3MmZiODczNi01NzBkLTRhYzEtYTliNi02NWUyYTczYzBlYTMiLCJwdWlkIjoiMTAwMzIwMDM3Q0FDNTlGNyIsInJoIjoiMC5BVVlBUy02RW4tTy05MEs0VE9WLVhwTHhCUWtBQUFBQUFBQUF3QUFBQUFBQUFBQkdBQnMuIiwic2NwIjoiQXBwLlJlYWQuQWxsIERhc2hib2FyZC5SZWFkLkFsbCBEYXRhZmxvdy5SZWFkLkFsbCBEYXRhc2V0LlJlYWQuQWxsIERhdGFzZXQuUmVhZFdyaXRlLkFsbCBMYWtlaG91c2UuUmVhZFdyaXRlLkFsbCBSZXBvcnQuUmVhZC5BbGwgV29ya3NwYWNlLlJlYWQuQWxsIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiQkNHUWNQaXN1SVlHd2NfVDN1OEtjdTBwRE9rRlNNQ3IzSTlHVThqcEVvMCIsInRpZCI6IjlmODRlZTRiLWJlZTMtNDJmNy1iODRjLWU1N2U1ZTkyZjEwNSIsInVuaXF1ZV9uYW1lIjoiSGFyc2h1bFNAbHVtZWwuY29tIiwidXBuIjoiSGFyc2h1bFNAbHVtZWwuY29tIiwidXRpIjoibVg0RXkyX0gya3VfUnJjTThiUjdBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19pZHJlbCI6IjI4IDEifQ.iTMORWpVCB7hh9ARF27gApZwQsiuiXs9Y57la-dLDkmqpiLJVa7yfQl-fkx2CO6JiVxjVWCdfaHDEG0E59TsUPuIIgRNnmO9zvRC3gTXKWSMJJShTRH5Ob22D7-RK_NXJ16qaE5Qu2lPZq9PYR8O7KDiKcOVwLniK9SQPTWiDZdBJWO5U1IzqgLk4-PY8IMblvPYhvyZTMSGHxIqlQO6qMnuWDz-rZd0aFQaXfEWRRrM-qbCVKlqmnKL-DQd4bd1vzunuw6UG7WaoU7AaecqHYJTWExscg4jiA-fWB-QPI-oFhG6OiItfqd4gm6u3wCqpRLRZIpA8OeZy55l7wO29g",
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
