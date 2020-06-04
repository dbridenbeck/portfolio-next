export default interface AppStateModel {
  currentPage: string;
  indexToSelect: number;
  pages: [string, string, string];
  infoText: {
    HELLO: {__html: string},
    ABOUT: {__html: string}
  }
  pageClickedOnce: boolean;
}