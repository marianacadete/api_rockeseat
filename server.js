import fastify from 'fastify';
import {DatabasePostgres} from './db-postgres.mjs'

    const server = fastify()

    const database = new DatabasePostgres()

    server.post('/videos', async (request, reply) => {
        const {title, description, duration} = request.body

        await database.create ({
        title,
        description,
        duration,
        })

        return reply.status(201).send()
    })

    server.get('/videos', async (request) => {
        const search = request.query.search
        const videos = await database.list(search)
        
        //return videos
    })

    server.get('/', async (request) => {

        return 'renato ';
    })

    server.put('/videos/:id' , async (request, reply) => {
        const videoId = request.params.id 
        const { title, description, duration} = request.body

        database.update( videoId, {
            title,
            description,
            duration,        
        })

        return reply.status(204).send()
    } )

    server.delete('/videos/:id', async (request, reply) => {
        const videoId = request.params.id 

        await database.deleteById(videoId)

        return reply.status(204).send()
    })


    server.listen({
        port: 3333,
    })