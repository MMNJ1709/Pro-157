AFRAME.registerComponent("comics-posters", {
  init: function () {
    this.postersContainer = this.el;
    this.posters()
  },

  posters: function () {
    const postersRef = [
      {
        id: "superman",
        url: "./assets/thumbnails/superman-poster.jpg",
      },
      {
        id: "spiderman",
        url: "./assets/thumbnails/spiderman-poster.jpg",
      },

      {
        id: "captain-aero",
        url: "./assets/thumbnails/captain-aero-poster.jpg",
      },
      {
        id: "outer-space",
        url: "./assets/thumbnails/outer-space-poster.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of postersRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl=this.createborder(position,item.id)
      
      // Thumbnail Element
      const poster=this.createPoster(item)
      borderEl.appendChild(poster)
      // Title Text Element
      this.postersContainer.appendChild(borderEl);
    }
  },
  createborder:function(position,id){
    const entityE1=document.createElement("a-entity")
    entityE1.setAttribute('id',id)
    entityE1.setAttribute('visible',true)
    entityE1.setAttribute('geometry',{
      primitive:'plane',width:22, height:40
    })
    entityE1.setAttribute("position",position)
    entityE1.setAttribute("material",{
      color:"#FFF"
    })
    return entityE1
  },
  createPoster:function(item){
    const entityE1=document.createElement("a-entity")
    entityE1.setAttribute('visible',true)
    entityE1.setAttribute('geometry',{
      primitive:'plane',width:20, height:28
    })
    entityE1.setAttribute("position",{x:0,y:5,z:0.1})
    entityE1.setAttribute("material",{
      src:item.url
    })
    return entityE1
  },
  

  
});
