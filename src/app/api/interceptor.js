export const apiinstance = async (url, options) => {
  const headers = {
    'Content-Type': 'application/json',
    // "Authorization": process.env.NEXT_PUBLIC_SPURTCMS_NEXTJS_STARTER_THEME_TOKEN,
    "Apikey":"J5EVUUpzY8dO-2HZZ44kS8Y8Wu4H7VYDWVWlpt23w_Kizc8MR0tZ2bouV8wDxx23j5TweJOM1GpwZr5-OrZzLA=="
  }

  const config = {
    method: options.method || 'GET',
    headers,
    ...options,
  }

  if (config.method === 'GET') {
    delete config.body
  } else {
    config.body = config.body
  }


  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SPURTCMS_NEXTJS_STARTER_THEME_BASEURL}${url}`, config);
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }


}