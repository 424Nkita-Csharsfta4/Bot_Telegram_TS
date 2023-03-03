import {Context} from "telegraf";



export interface SessionData{
    ts_like?: boolean;
    ts_dislike?: boolean;
   
}

export interface IBotContext extends Context  {
    session: {
      ts_like?: boolean;
      ts_dislike?: boolean;
    };
  }
  
