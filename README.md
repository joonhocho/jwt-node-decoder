# jwt-decoder
Decodes JWT (JSON Web Token) and checks expiration date. Node version port from [angular-jwt](https://github.com/auth0/angular-jwt).
Implemented on top of the official [jwt-decode](https://github.com/auth0/jwt-decode).

### Install
```
npm install --save jwt-node-decoder
```

### Usage
```javascript
import {
  decodeToken,
  getTokenExpirationDate,
  isTokenExpired,
} from 'jwt-node-decoder';
```

Take a look at https://github.com/joonhocho/jwt-node-decoder/blob/master/test/index.js
    
### LICENSE
    The MIT License (MIT)
    
    Copyright (c) 2016 Joon Ho Cho
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
