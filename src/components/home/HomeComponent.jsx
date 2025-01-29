// import React, { useEffect, useState } from 'react';
// import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
// import { fetchRestaurants } from '../../services/restaurantService';

// const HomeComponent = () => {
//   const [restaurants, setRestaurants] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getRestaurants = async () => {
//       try {
//         const data = await fetchRestaurants();
//         setRestaurants(data);
//       } catch (err) {
//         setError('Failed to fetch restaurants. Please try again later.');
//       }
//     };

//     getRestaurants();
//   }, []);

//   return (
//     <Box padding={4}>
//       <Typography variant="h4" fontWeight="bold" gutterBottom>
//         Restaurants in Riyadh
//       </Typography>
//       {error ? (
//         <Typography color="error" variant="body1">
//           {error}
//         </Typography>
//       ) : (
//         <Grid container spacing={3}>
//           {restaurants.map((restaurant, index) => (
//             <Grid item xs={12} md={6} lg={4} key={index}>
//               <Card sx={{ borderRadius: '16px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
//                 <CardContent>
//                   <Typography variant="h6" fontWeight="bold">
//                     {restaurant.name}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {restaurant.location}
//                   </Typography>
//                   <Typography variant="body2">
//                     Cuisine: {restaurant.cuisine}
//                   </Typography>
//                   <Typography variant="body2">
//                     Rating: {restaurant.rating}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       )}
//     </Box>
//   );
// };

// export default HomeComponent;


import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import { fetchRestaurants } from '../../services/restaurantService';

const HomeComponent = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const data = await fetchRestaurants();
        setRestaurants(data);
      } catch (err) {
        setError('Failed to fetch restaurants. Please try again later.');
      }
    };

    getRestaurants();
  }, []);

  return (
    <Box padding={4}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Restaurants in Riyadh
      </Typography>
      {error ? (
        <Typography color="error" variant="body1">
          {error}
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {restaurants.map((restaurant, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card
                sx={{
                  borderRadius: '16px',
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
                    cursor: 'pointer',
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {restaurant.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {restaurant.location}
                  </Typography>
                  <Typography variant="body2">
                    Cuisine: {restaurant.cuisine}
                  </Typography>
                  <Typography variant="body2">
                    Rating: {restaurant.rating}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default HomeComponent;
