```javascript
//In a functional component
const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //Incorrect usage of setTimeout
    setTimeout(() => {
      setCount(count + 1); //This will use the stale closure value of count 
    }, 1000);
  }, []);

  return <div>Count: {count}</div>;
};
```