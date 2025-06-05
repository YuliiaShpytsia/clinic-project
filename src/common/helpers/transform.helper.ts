// export class TransformHelper {
//   public static toLowerCase({ value }: { value: string }): string {
//     return typeof value === 'string' ? value.toLowerCase() : value;
//   }
//
//   public static trim({ value }: { value: string }): string {
//     return typeof value === 'string' ? value.trim() : value;
//   }
//
//   public static trimArray({ value }: { value: any[] }): any[] {
//     return Array.isArray(value)
//       ? value.map((item) => (typeof item === 'string' ? item.trim() : item))
//       : value;
//   }
//
//   public static uniqueItems({ value }: { value: any[] }): any[] {
//     return Array.isArray(value) ? Array.from(new Set(value)) : value;
//   }
//
//   public static toLowerCaseArray({ value }: { value: string[] }): string[] {
//     return Array.isArray(value)
//       ? value.map((item) =>
//           typeof item === 'string' ? item.toLowerCase() : item,
//         )
//       : value;
//   }
// }
