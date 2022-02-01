const url = 'https://api.coincap.io/v2/assets'

async function Cripto() {
  
  try{
    const cripto = await fetch(url)
    const data = cripto.json()
    const crip = data.value;
    console.log(crip);
  } catch (error) {

  }

}