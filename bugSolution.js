```javascript
//In a functional component
const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1); //Functional Update
    }, 1000);
    return () => clearInterval(interval); // Cleanup function
  }, []);

  return <div>Count: {count}</div>;
};
```