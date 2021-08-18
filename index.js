    client.ws.on("INTERACTION_CREATE",async function(int) {
      console.log(int)
      const customID = int.data.custom_id
    if(customID !== "renkler") return
    
const hangisi = int.data.values[0]

const roller = [
  {name: "purplerol",rol: "869252856916611093"},
  {name: "redrol",rol: "869252856094552084"},
  {name: "bluerol",rol: "869252855356346429"},
  {name: "yellowrol",rol: "869252854379061289"},
  {name: "orangerol",rol: "869252857285713981"},

]
const guild = client.guilds.cache.get(int.guild_id)

const member = guild.members.cache.get(int.member.user.id)
const type = roller.find(x => x.name === hangisi)
if(!type) return

member.roles.cache.has(type.rol) ? member.roles.remove(type.rol) : member.roles.add(type.rol)
      client.api.interactions(int.id, int.token).callback.post({data: {type: 4,data: {content: "Rol Ekleme/Çıkarma İşleminiz Başarıyla Gerçeklti!",flags: "64" }}})
    
    });


    
    // .eval client.api.channels(message.channel.id).messages.post({ data: {"content":"Üzerinize Eklemek/Çıkarmak İstediğiniz Rolü Menüden seçerek alabilirsiniz","components":[{"type":1,"components":[

    //   {"type":3,"custom_id":"renkler",options: [
    //   {"label": "Mavi","value": "bluerol","emoji": {name: ":blue_circle:"},"description": "Mavi Renk Rolünü Üzerinize Eklersiniz/Çıkartırsınız"},
    //   {"label": "Kırmızı","value": "redrol","emoji":{name:  ":red_circle:"},"description": "Kırmızı Renk Rolünü Üzerinize Eklersiniz/Çıkartırsınız"},
    //   {"label": "Sarı","value": "yellowrol","emoji": {name: ":yellow_circle:"},"description": "Sarı Renk Rolünü Üzerinize Eklersiniz/Çıkartırsınız"},
    //   {"label": "Mor","value": "purplerol","emoji": {name:  ":purple_circle:"},"description": "Mor Renk Rolünü Üzerinize Eklersiniz/Çıkartırsınız"},
    //   {"label": "Turuncu","value": "orangerol","emoji": {name: ":orange_circle:"},"description": "Turuncu Renk Rolünü Üzerinize Eklersiniz/Çıkartırsınız"}
      
    //   ]
    //   },
    //   ]}]} })
