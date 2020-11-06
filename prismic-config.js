import Prismic from 'prismic-javascript'


export const apiEndpoint = "https://station-furniture.cdn.prismic.io/api/v2";
export const accessToken = "MC5YNV8wZXhBQUFDQUFvdXZr.77-9Vu-_vQ3vv73vv71bR--_ve-_ve-_ve-_vVQWDybvv717QX4u77-977-977-977-977-9cERa77-977-9Ww";

export const Client = Prismic.client(apiEndpoint, accessToken);

export const linkResolver = (doc) => {
    if (doc.type === 'home') return '/';
    if (doc.type === 'update') return '/';
    return '/';
};
