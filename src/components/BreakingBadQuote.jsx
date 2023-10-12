import React, { useEffect, useState } from 'react';

const BreakingBadQuote = () => {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://breakingbadapi.com/api/quotes/1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setQuote(data[0].quote);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <blockquote>{quote}</blockquote>
      )}
    </div>
  );
};

export default BreakingBadQuote;
