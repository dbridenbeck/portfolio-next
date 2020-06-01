export default interface AppStateModel {
  onHelloPage: boolean;
  indexToSelect: number;
  title: [string, string];
  infoText: [{__html: string}, {__html: string}];
  linkText: [string, string];
  pageClickedOnce: boolean;
}