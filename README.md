<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# sliceAssign

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Assign element values from a broadcasted input array to corresponding elements in an output array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import sliceAssign from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-fancy-slice-assign@deno/mod.js';
```

#### slice( x, y, s, strict )

Assigns element values from a broadcasted input array to corresponding elements in an output array.

```javascript
import Slice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@deno/mod.js';

var x = [ 1, 2, 3, 4 ];
var y = [ 0, 0, 0, 0, 0, 0, 0, 0 ];

var s = new Slice( null, null, -2 );
// returns <Slice>

var out = sliceAssign( x, y, s, false );
// returns [ 0, 4, 0, 3, 0, 2, 0, 1 ]

var bool = ( out === y );
// returns true
```

The function supports the following parameters:

-   **x**: input array.
-   **y**: output array.
-   **s**: [slice][@stdlib/slice/ctor] object specifying the output array slice.
-   **strict**: boolean indicating whether to enforce strict bounds checking.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The input array **must** be broadcast compatible with the output array slice (i.e., contain only one element or the same number of elements as in the slice).
-   The input array must have a [data type][@stdlib/array/dtypes] which can be [safely cast][@stdlib/array/safe-casts] to the output array data type. Floating-point data types (both real and complex) are allowed to downcast to a lower precision data type of the [same kind][@stdlib/array/same-kind-casts] (e.g., element values from a `'float64'` input array can be assigned to corresponding elements in a `'float32'` output array).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import zeroTo from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-zero-to@deno/mod.js';
import zeros from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-zeros@deno/mod.js';
import Slice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@deno/mod.js';
import sliceAssign from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-fancy-slice-assign@deno/mod.js';

var x = zeroTo( 10, 'generic' );
// returns [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

var y = zeros( 10, 'generic' );
// returns [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]

var s = new Slice();
var out = sliceAssign( x, y, s, false );
// returns [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

x = zeroTo( 5, 'generic' );
// returns [ 0, 1, 2, 3, 4 ]

y = zeros( 10, 'generic' );
s = new Slice( null, null, -2 );
out = sliceAssign( x, y, s, false );
// returns [ 0, 4, 0, 3, 0, 2, 0, 1, 0, 0 ]

x = zeroTo( 5, 'generic' );
// returns [ 0, 1, 2, 3, 4 ]

y = zeros( 10, 'generic' );
s = new Slice( -2, null, -2 );
out = sliceAssign( x, y, s, false );
// returns [ 4, 0, 3, 0, 2, 0, 1, 0, 0, 0 ]

x = zeroTo( 6, 'generic' );
// returns [ 0, 1, 2, 3, 4, 5 ]

y = zeros( 10, 'generic' );
s = new Slice( 2, -2 );
out = sliceAssign( x, y, s, false );
// returns [ 0, 0, 0, 1, 2, 3, 4, 5, 0, 0 ]

x = zeroTo( 3, 'generic' );
// returns [ 0, 1, 2 ]

y = zeros( 10, 'generic' );
s = new Slice( 2, 5 );
out = sliceAssign( x, y, s, false );
// returns [ 0, 0, 0, 1, 2, 0, 0, 0, 0, 0 ]

x = zeroTo( 3, 'generic' );
// returns [ 0, 1, 2 ]

y = zeros( 10, 'generic' );
s = new Slice( 4, 1, -1 );
out = sliceAssign( x, y, s, false );
// returns [ 0, 0, 2, 1, 0, 0, 0, 0, 0, 0 ]

x = zeroTo( 5, 'generic' );
// returns [ 0, 1, 2, 3, 4 ]

y = zeros( 10, 'generic' );
s = new Slice( 5 );
out = sliceAssign( x, y, s, false );
// returns [ 0, 1, 2, 3, 4, 0, 0, 0, 0, 0 ]

x = zeroTo( 5, 'generic' );
// returns [ 0, 1, 2, 3, 4 ]

y = zeros( 10, 'generic' );
s = new Slice( 5, null );
out = sliceAssign( x, y, s, false );
// returns [ 0, 0, 0, 0, 0, 0, 1, 2, 3, 4 ]
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-base-fancy-slice-assign.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-base-fancy-slice-assign

[test-image]: https://github.com/stdlib-js/array-base-fancy-slice-assign/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/array-base-fancy-slice-assign/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-base-fancy-slice-assign/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-base-fancy-slice-assign?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-base-fancy-slice-assign.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-base-fancy-slice-assign/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-base-fancy-slice-assign/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-base-fancy-slice-assign/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-base-fancy-slice-assign/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-base-fancy-slice-assign/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-base-fancy-slice-assign/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-base-fancy-slice-assign/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-base-fancy-slice-assign/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base-fancy-slice-assign/main/LICENSE

[@stdlib/slice/ctor]: https://github.com/stdlib-js/slice-ctor/tree/deno

[@stdlib/array/dtypes]: https://github.com/stdlib-js/array-dtypes/tree/deno

[@stdlib/array/safe-casts]: https://github.com/stdlib-js/array-safe-casts/tree/deno

[@stdlib/array/same-kind-casts]: https://github.com/stdlib-js/array-same-kind-casts/tree/deno

</section>

<!-- /.links -->
