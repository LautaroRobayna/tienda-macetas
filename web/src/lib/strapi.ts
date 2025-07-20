const { STRAPI_HOST, STRAPI_TOKEN } = process.env;

export async function query(url: string) {
    const response = await fetch(`${STRAPI_HOST}/api/${url}`, {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
        "Content-Type": "application/json"
      },
    });
    
    return response.json();
  }
