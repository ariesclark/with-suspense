# with-suspense
A higher-order component for React suspense boundaries.

## Usage
```tsx
<ExampleComponent name="world" />;
```

### Without props in fallback.
```tsx
import { withSuspense } from "with-suspense";

const ExampleComponent = withSuspense<{
  name: string;
}>(({ name }) => {
  // Artificial delay to demonstrate the fallback.
  use(useMemo(() => new Promise((resolve) => setTimeout(resolve, 1000)), []));

  return (
    <span>
      {/* eslint-disable-next-line style/jsx-one-expression-per-line */}
      Hello, {name}.
    </span>
  );
}, {
  fallback: (
    <span>
      Hello, unknown. (loading)
    </span>
  )
});
```

### With props in fallback.
```tsx
import { withSuspense } from "with-suspense";

const ExampleComponent = withSuspense<{
  name: string;
}>(({ name }) => {
  // Artificial delay to demonstrate the fallback.
  use(useMemo(() => new Promise((resolve) => setTimeout(resolve, 1000)), []));

  return (
    <span>
      {/* eslint-disable-next-line style/jsx-one-expression-per-line */}
      Hello, {name}.
    </span>
  );
}, {
  // `props` are available when rendering fallback.
  fallback: ({ name }) => {
    return (
      <span>
        {/* eslint-disable-next-line style/jsx-one-expression-per-line */}
        Hello, {name}. (loading)
      </span>
    );
  }
});
```
