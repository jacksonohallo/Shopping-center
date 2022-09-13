import sanityClient from '@sanity/client';
import imagrUrlBuilder from '@sanity/image-url'


export const client = sanityClient({
    projectId: 'bp6tc1ts',
    dataset: 'production',
    apiVersion: '2022-09-13',
    useCdn: '',
    token: 'process.env.NEXT_PUBLIC_SANITY_TOKEN',
})

const builder = imagrUrlBuilder(client);

export const urlFor=(source) => builder.image(source);