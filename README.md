## Goals
1. Infinity Scrollable List Component
2. Make request delay when request too quick in short time
3. Define repository architechture

## Architechture
* Use CRA to quick build project skeleton
* Use material-ui as css framework and css-js method
* Prepare components dir to put sharable dummy component
* Prepare containers dir to put data process related components
* Prepare context dir to put shared data (use)
* Prepare styles/theme to customize the main theme on repo
* Prepate utils to put available shared fns.

## Scrollable List Component Definition
```
import ScrollableList, { fetchStateEnum } from "...";

/* 
Available Props
  fetchState: object { state: fetchStateEnum, loading: Bool }
  loadMore: fn,
  scrollOffset: integer
*/
```

* Use Enum to control the fetching state condition.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

