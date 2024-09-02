export class SubscriptionCreation{
  constructor(private userId : number, private themeId : number){

  }

  public getUserId(): number {
    return this.userId;
  }

  // Setter for userId
  public setUserId(userId: number): void {
    this.userId = userId;
  }

  // Getter for themeId
  public getThemeId(): number {
    return this.themeId;
  }

  // Setter for themeId
  public setThemeId(themeId: number): void {
    this.themeId = themeId;
  }

}
