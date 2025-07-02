import { Controller, Get, Post, Params, Body, Req, Res } from '@decorators/express';
import { Request, Response } from 'express';

@Controller('/hello')
export class HelloController {
  
  @Get('/')
  getHello(@Req() req: Request, @Res() res: Response) {
    res.json({
      message: 'Hello, World!',
      timestamp: new Date().toISOString(),
      method: 'GET'
    });
  }

  @Get('/:name')
  getHelloWithName(@Params('name') name: string, @Req() req: Request, @Res() res: Response) {
    res.json({
      message: `Hello, ${name}!`,
      timestamp: new Date().toISOString(),
      method: 'GET'
    });
  }

  @Post('/')
  postHello(@Body() body: any, @Req() req: Request, @Res() res: Response) {
    res.json({
      message: 'Hello from POST!',
      receivedData: body,
      timestamp: new Date().toISOString(),
      method: 'POST'
    });
  }
}