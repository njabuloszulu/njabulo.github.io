---
Layout:
Title: "Fetching data using useEffect"
Data: "2020-08-14"
---

## The challenge I had

# fetching data using functional component's useEffect.

I wanted to fetch data from a DB using functional components, and I found it difficult a first because I have never used useEffect before, and the most challenging part was to get my data from the DB and store it to my local stat then display it to the Dom.

What I found out, later on, was that the problem I was faced with my approach towards it was wrong because what I did was to try and use useEffect without trying to read and get more information on how to use it.
I just jumped straight to looking at other people's examples and try to follow the example exactly the way it was and the outputs of that lead to me not get what I expected, which was errors and my data not displaying to the dom.

## UseEffect example

`useEffect(() => { const fetchData = async () => { const response = await axios.get(route); setData(response.data); }; fetchData(); }, []);`
