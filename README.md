# bz2

bzip2 library for JavaScript

```js
import { decompress } from 'bz2';

const output = decompress(input);
```

Available from the npm registry as `bz2`
and from the GitHub registry as `@sheetjs/bz2`.

Try out the [demo](https://http://sheetjs.com/bz2/demo).

## API

### `decompress(data, crc)`
* `data`: `Uint8Array` - The data to be decompressed.
* `crc`: `boolean` - Check data using CRC32. Default: `true`.
* **Returns**: `Uint8Array`

Decompresses `data`.
