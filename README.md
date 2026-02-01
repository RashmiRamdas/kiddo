Reference: https://www.tinyorganics.com/
This is a React app built with Webpack and Babel and not using CRA.
This is simple app called KIDDO created for learning purpose.

To use scss
1. npm install --save-dev sass sass-loader 
2. add rules for scss files in webpack
3. import scss files in js files.

https://blog.webdevsimplified.com/2022-07/react-router/

# React Router is the routing library used
`npm i react-router-dom` to install React Router.

After installing react-router-dom three things needs to be done to use React Router,
1. Setup your router
2. Define your routes
3. Handle navigation

## Configuring The Router
Import the specific router you need (BrowserRouter for the web and NativeRouter for mobile) and wrap your entire application in that router.
Generally you will import your router in the index.js page of your application and it will wrap your App component. 
The router works just like a context in React and provides all the necessary information to your application so you can do routing and use all the custom hooks from React Router.

`<BrowserRouter>
      <App />
</BrowserRouter>`

## Defining Routes
This is generally done at the top level of your application, such as in the App component, but can be done anywhere you want.

`const Home = () =>  <div><Home/div>
const BookList = () => <div><BookList/div>

export function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} />
    </Routes>
  )
}`

Whenever your URL changes React Router will look at the routes defined in your Routes component and it will render the content in the element prop of the Route that has a path that matches the URL. In the above example if our URL was /books then the BookList component would be rendered.

The nice thing about React Router is that when you navigate between pages it will only refresh the content inside your Routes component. All the rest of the content on your page will stay the same which helps with performance and user experience.

## Handling Navigation
 Normally in an application you would navigate with anchor tags, but React Router uses its own custom Link component to handle navigation. This Link component is just a wrapper around an anchor tag that helps ensure all the routing and conditional re-rendering is handled properly so you can use it just like your would a normal anchor tag.

 `<Link to="/">Home</Link>`
We need to use `to` prop to set the URL instead of the `href` prop

## Advanced Route Definitions

### Dynamic Routing

`<Route path="/books/:id" element={<Book />} />`
This route has dynamic parameter of :id
when you have a dynamic route like this you want to access the dynamic value in your custom component which is where the useParams hook comes in.

`import { useParams } from "react-router-dom"

export function Book() {
  const { id } = useParams()

  return <h1>Book {id}</h1>
}`

### Routing Priority
Consider this,
`<Route path="/books/:id" element={<Book />} />
  <Route path="/books/new" element={<NewBook />} />`

If we have the URL /books/new which route would this match?
In older versions of React Router whichever route was defined first would be the one that is rendered so in our case the /books/:id route would be rendered which is obviously not what we want. Luckily, version 6 of React Router changed this so now React Router will use an algorithm to determine which route is most likely the one you want. In our case we obviously want to render the /books/new route so React Router will select that route for us.


`<Route path="*" element={<NotFound />} />`
A * will match anything at all which makes it perfect for things like a 404 page. A route that contains a * will also be less specific than anything else so you will never accidentally match a * route when another route would have also matched.

### Nested Routes

`
  <Route path="/books">
    <Route index element={<BookList />} />
    <Route path=":id" element={<Book />} />
    <Route path="new" element={<NewBook />} />
  </Route>
`

This nesting is pretty simple to do. All you need to do is make a parent Route that has the path prop set to the shared path for all your child Route components. Then inside the parent Route you can put all the child Route components. The only difference is that the path prop of the child Route components no longer includes the shared /books route. Also, the route for /books is replaced with a Route component that has no path prop, but instead has an index prop. All this is saying is that the path of the index Route is the same as the parent Route.

Now if this is all you could do with nested routes it would be only marginally useful, but the true power of nested routes comes in how it handles shared layouts.

### Shared Layouts
`
<Route path="/books" element={<BooksLayout />}>
    <Route index element={<BookList />} />
    <Route path=":id" element={<Book />} />
    <Route path="new" element={<NewBook />} />
  </Route>
`
`
export function BooksLayout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/books/1">Book 1</Link>
          </li>
          <li>
            <Link to="/books/2">Book 2</Link>
          </li>
          <li>
            <Link to="/books/new">New Book</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}
`

The way our new code will work is whenever we match a route inside the /book parent Route it will render the BooksLayout component which contains our shared navigation. Then whichever child Route is matched will be rendered wherever the Outlet component is placed inside our layout component. The Outlet component is essentially a placeholder component that will render whatever our current page’s content is. This structure is incredibly useful and makes sharing code between routes incredibly easy.

Another way of sharing layouts
`
<Route element={<OtherLayout />}>
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
</Route>
`
This bit of code will create two routes, /contact and /about, which both are rendered inside the OtherLayout component. This technique of wrapping multiple Route components in a parent Route component with no path prop is useful if you want those routes to share a single layout even if they don’t have a similar path.

### Outlet Context
`<Outlet context={{ hello: "world" }} />`
`
export function Book() {
  const { id } = useParams()
  const context = useOutletContext()

  return (
    <h1>
      Book {id} {context.hello}
    </h1>
  )
}
`
As you can see from this example, we are passing down a context value of { hello: "world" } and then in our child component we are using the useOutletContext hook to access the value for our context. This is a pretty common pattern to use since often you will have shared data between all your child components which is the ideal use case for this context.

### Multiple Routes
1. Separate Routes
`
export function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Books</Link></li>
        </ul>
      </nav>

      <aside>
        <Routes>
          <Route path="/books" element={<BookSidebar />}>
        </Routes>
      </aside>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
      </Routes>
    </>
  )
}`

In the above example we have two Routes. The main Routes defines all the main components for our page and then we have a secondary Routes inside the aside that will render the sidebar for our books page when we are at /books. This means if our URL is /books both of our Routes components will render out content since they both have a unique match for /books in their Routes.

Another thing that you can do with multiple Routes components is hardcode the `location` prop.
`<Routes location="/books">
  <Route path="/books" element={<BookSidebar />}>
</Routes>`

By hardcoding a location prop like this we are overriding the default behavior or React Router so no matter what the URL of our page is this Routes component will match its Route as if the URL was /books.

2. Nested Routes

`<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/books/*" element={<BookRoutes />} />
  <Route path="*" element={<NotFound />} />
</Routes>`

`export function BookRoutes() {
  return (
    <Routes>
      <Route element={<BookLayout />}>
        <Route index element={<BookList />} />
        <Route path=":id" element={<Book />} />
        <Route path="new" element={<NewBook />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}`
This is pretty common if you have lots of routes and want to clean up your code by moving similar routes into their own files.

Nesting Routes in React Router is pretty simple. All you need to do is create a new component to store your nested Routes this component should have a Routes component and inside that Routes component should be all the Route components that you are matching with the parent Route. In our case we are moving all our /books routes into this BookRoute component. Then in the parent Routes you need to define a Route that has a path equal to the path all your nested Routes share. In our case that would be /books. The important thing, though, is you need to end your parent Route path with a * otherwise it will not properly match the child routes.

Essentially, the code we have written says that whenever a route starts with /book/ it should search inside the BookRoutes component to see if their is a Route that matches. This is also why we have another * route in BookRoutes so that we can ensure if our URL does not match any of the BookRoutes it will properly render the NotFound component.

### useRoutes Hook
In React Router you can use a JavaScript object to define your routes instead of JSX if you prefer.
`  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/books",
      children: [
        { index: true, element: <BookList /> },
        { path: ":id", element: <Book /> },
      ],
    },
  ])`


todo:

header stick to top and not disappear on scroll
update texts
mobile support