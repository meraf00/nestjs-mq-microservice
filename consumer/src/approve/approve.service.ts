import { Inject, Injectable } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Injectable()
export class ApproveService {
  constructor(@Inject(REQUEST) readonly req: Request) {}

  approveHandlerOne(data: any) {
    console.log(this.req);

    console.log('Approve handler one', data);
    return 'Approve handler one';
  }

  approveHandlerTwo() {
    console.log('Approve handler two');
    return 'Approve handler two';
  }
}
