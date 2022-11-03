const Btn = document.getElementById("btn");
      const Uteks = document.getElementById("teks");
      const Uteks2 = document.getElementById("teks2");
      const Fig = document.querySelector("figure");
      const myImg = document.querySelector("div", "img");

      function tampil() {
        var CreateStyle = document.createElement("style");
        document.head.appendChild(CreateStyle);
        var styles = `
        html{margin: 0;padding: 0;}
        body{
          background-image: url('2.jpg');
        }
        img{
            width: 800px;
            height: 400px;
        }
        .center {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        } 
        p{
            text-align:center;
            font-size:x-large;
            color:#24f0d9;   
        }
        button {
            background-color: #E9967A;
            color: #FFFFFF;
            border-radius: 10px;
            border: none;
            padding: 10px;
            margin: 10px;
        }
        button:hover {
            color: black;
            background-color: #b2ebf2;
            transition: 1s;
        }`;
        var styleSheet = document.querySelector("style");
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);
      } 
      Btn.addEventListener("click", tampil);