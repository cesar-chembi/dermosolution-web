import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  public s3 = '';
  public HTTPS3 = '';
  public S3REGION = '';
  public AWS_AKEY = '';
  public AWS_SKEY = '';

  public enableDebug = true;
  constructor() { }
}
