var wordShown = false;
var word_holder = "--Game Not Started Yet--";
var image_seen_src = "images/img0004.png"
var image_not_seen_src = "images/img0005.png"
var img_height = 130;
var img_word_p = new Image();

//Awake Function
$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
  //Image setup
  img_word_p.onload = function() {
    var aspectRatio = (this.width / this.height)
    this.width = (img_height * aspectRatio);
    var p_img = document.getElementById("image_place");
    p_img.innerHTML = ""
    p_img.appendChild(this);
    if (wordShown) {
      document.getElementById("word_image_pop").style.visibility = "visible";
    }
  }
  img_word_p.onerror = function() {
    this.src = 'images/blank.png';
  }
  img_word_p.classList.add("image_div_placeHolder");
  img_word_p.id = "word_image_pop";
});

function Set_Word(word, img, has_seen) {
  //Set Word display
  word_holder = word;
  if (wordShown) {
    document.getElementById("theword_ouput").innerHTML = word_holder;
  }
  //Set image
  document.getElementById("word_image_pop").style.visibility = "Hidden";
  img_word_p.src = img;
  //Set Seen icon
  if (has_seen != null) {
    document.getElementById("image_seen_not").style.visibility = "visible";
    if (has_seen) {
      document.getElementById("image_seen_not").src = image_seen_src;
      $("#image_seen_not").tooltip().attr('data-original-title', "You have seen this word before.");
    } else {
      document.getElementById("image_seen_not").src = image_not_seen_src;
      $("#image_seen_not").tooltip().attr('data-original-title', "You have not seen this word before.");
    }
  } else {
    document.getElementById("image_seen_not").src = "";
    $("#image_seen_not").tooltip().attr('data-original-title', "");
    document.getElementById("image_seen_not").style.visibility = "hidden";
  }

}

function word_module_show_btn() {

  if (!wordShown) {
    document.getElementById("show_hide_theword_btn").value = "Hide";
    document.getElementById("theword_ouput").innerHTML = word_holder;
    document.getElementById("word_image_pop").style.visibility = "visible";

  } else {
    document.getElementById("show_hide_theword_btn").value = "Show";
    document.getElementById("theword_ouput").innerHTML = "???";
    document.getElementById("word_image_pop").style.visibility = "hidden";

  }
  wordShown = !wordShown;
}