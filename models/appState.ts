export default interface AppStateModel {
  currentPage: string;
  indexToSelect: number;
  pages: [
    {pageName: string, color: string}, 
    {pageName: string, color: string}, 
    {pageName: string, color: string} 
  ];
    infoText: {
    HELLO: {__html: string},
    ABOUT: {__html: string}
  }
  pageClickedOnce: boolean;
}