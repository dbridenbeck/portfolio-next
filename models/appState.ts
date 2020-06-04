export default interface AppStateModel {
  currentPage: string;
  indexToSelect: number;
  pages: [string, string, string];
  infoText: [{__html: string}, {__html: string}];
  pageClickedOnce: boolean;
}