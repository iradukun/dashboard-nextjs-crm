export type Person = {
  firstName: string,
  lastName: string,
  email: string,
  avatar: string,
  lastActivity:string
}

export type Traffic={
  date: Date,
  uniqueVisitors: number,
  pageViews: number,
  bounceRate: number,
  averageSessionDuration:number
}