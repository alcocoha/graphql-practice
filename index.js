import express from 'express';

// graphql
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', ( req, res) => {
    res.send("Todo listo")
});

// resolver
const root = {
    cliente: () => ({
        id: 'AS129DA98S',
        nombre: 'Jorge',
        apellido: 'Hurtado',
        empresa: 'Apple Inc',
        email: 'albertohurtadoo@hotmail.com'
    })
};

app.use('/graphql', graphqlHTTP({
    //el squma que va a utilizar
    schema,
    //el resolver se pasa como rootValue
    rootValue: root,
    // utilizar graphiql
    graphiql: true

}));

app.listen( 8000, () => {
    console.log('El servidor esta funcionando');
});