const fetchData = () => {
  fetch("http://boxigo.in/sampleAPI.php")
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      //first
      document.querySelector(".container1 .one .col1 .userid").innerHTML =
        data.Customer_Estimate_Flow[0].user_id;
      document.querySelector(".container1 .one .col1 .propertySize").innerHTML =
        data.Customer_Estimate_Flow[0].property_size;
      document.querySelector(".container1 .one .col2 .city").innerHTML =
        data.Customer_Estimate_Flow[0].moving_from;
      document.querySelector(".container1 .one .col3 .movingOn").innerHTML =
        data.Customer_Estimate_Flow[0].moving_on;
      document.querySelector(".container1 .one .col4 .city").innerHTML =
        data.Customer_Estimate_Flow[0].moving_to;
      document.querySelector(".container1 .two .orderDate").innerHTML =
        data.Customer_Estimate_Flow[0].date_created;
      //view more details
      //living room
      document.querySelector(
        "#vmd1 .vmd1 .vmd1c1 .itemsDetails .lr1"
      ).innerHTML =
        data.Customer_Estimate_Flow[0].items.rooms.living_room.center_table;
      document.querySelector(
        "#vmd1 .vmd1 .vmd1c1 .itemsDetails .lr2"
      ).innerHTML =
        data.Customer_Estimate_Flow[0].items.rooms.living_room.computer_table;
      document.querySelector(
        "#vmd1 .vmd1 .vmd1c1 .itemsDetails .lr3"
      ).innerHTML =
        data.Customer_Estimate_Flow[0].items.rooms.living_room.foldable_chair;
      document.querySelector(
        "#vmd1 .vmd1 .vmd1c1 .itemsDetails .lr4"
      ).innerHTML =
        data.Customer_Estimate_Flow[0].items.rooms.living_room.home_theater;
      document.querySelector(
        "#vmd1 .vmd1 .vmd1c1 .itemsDetails .lr5"
      ).innerHTML =
        data.Customer_Estimate_Flow[0].items.rooms.living_room.non_foldable_chair;
      //other
      document.querySelector(
        "#vmd1 .vmd1 .vmd1c1 .itemsDetails .o1"
      ).innerHTML =
        data.Customer_Estimate_Flow[0].items.rooms.others.center_table;
      document.querySelector(
        "#vmd1 .vmd1 .vmd1c1 .itemsDetails .o2"
      ).innerHTML =
        data.Customer_Estimate_Flow[0].items.rooms.others.computer_table;
      document.querySelector(
        "#vmd1 .vmd1 .vmd1c1 .itemsDetails .o3"
      ).innerHTML =
        data.Customer_Estimate_Flow[0].items.rooms.others.foldable_chair;
      document.querySelector(
        "#vmd1 .vmd1 .vmd1c1 .itemsDetails .o4"
      ).innerHTML =
        data.Customer_Estimate_Flow[0].items.rooms.others.home_theater;
      document.querySelector(
        "#vmd1 .vmd1 .vmd1c1 .itemsDetails .o5"
      ).innerHTML =
        data.Customer_Estimate_Flow[0].items.rooms.others.non_foldable_chair;
      //bedroom
      document.querySelector(
        "#vmd1 .vmd1 .vmd1c2 .itemsDetails .br1"
      ).innerHTML =
        data.Customer_Estimate_Flow[0].items.rooms.bed_room.center_table;
      document.querySelector(
        "#vmd1 .vmd1 .vmd1c2 .itemsDetails .br2"
      ).innerHTML =
        data.Customer_Estimate_Flow[0].items.rooms.bed_room.computer_table;
      document.querySelector(
        "#vmd1 .vmd1 .vmd1c2 .itemsDetails .br3"
      ).innerHTML =
        data.Customer_Estimate_Flow[0].items.rooms.bed_room.foldable_chair;
      document.querySelector(
        "#vmd1 .vmd1 .vmd1c2 .itemsDetails .br4"
      ).innerHTML =
        data.Customer_Estimate_Flow[0].items.rooms.bed_room.home_theater;
      document.querySelector(
        "#vmd1 .vmd1 .vmd1c2 .itemsDetails .br5"
      ).innerHTML =
        data.Customer_Estimate_Flow[0].items.rooms.bed_room.non_foldable_chair;
      //kitchen
      document.querySelector(
        "#vmd1 .vmd1 .vmd1c3 .itemsDetails .k1"
      ).innerHTML =
        data.Customer_Estimate_Flow[0].items.rooms.kitchen.center_table;
      document.querySelector(
        "#vmd1 .vmd1 .vmd1c3 .itemsDetails .k2"
      ).innerHTML =
        data.Customer_Estimate_Flow[0].items.rooms.kitchen.computer_table;
      document.querySelector(
        "#vmd1 .vmd1 .vmd1c3 .itemsDetails .k3"
      ).innerHTML =
        data.Customer_Estimate_Flow[0].items.rooms.kitchen.foldable_chair;
      document.querySelector(
        "#vmd1 .vmd1 .vmd1c3 .itemsDetails .k4"
      ).innerHTML =
        data.Customer_Estimate_Flow[0].items.rooms.kitchen.home_theater;
      document.querySelector(
        "#vmd1 .vmd1 .vmd1c3 .itemsDetails .k5"
      ).innerHTML =
        data.Customer_Estimate_Flow[0].items.rooms.kitchen.non_foldable_chair;

      document.querySelector("#vmd1 .vmd2 .vmd2c1 .floorNo span").innerHTML =
        data.Customer_Estimate_Flow[0].old_floor_no;
      document.querySelector("#vmd1 .vmd2 .vmd2c1 .elevator span").innerHTML =
        data.Customer_Estimate_Flow[0].old_elevator_availability;
      document.querySelector("#vmd1 .vmd2 .vmd2c1 .packing span").innerHTML =
        data.Customer_Estimate_Flow[0].packing_service;
      document.querySelector("#vmd1 .vmd2 .vmd2c1 .dist span").innerHTML =
        data.Customer_Estimate_Flow[0].old_parking_distance;

      document.querySelector("#vmd1 .vmd2 .vmd2c2 .floorNo span").innerHTML =
        data.Customer_Estimate_Flow[0].new_floor_no;
      document.querySelector("#vmd1 .vmd2 .vmd2c2 .elevator span").innerHTML =
        data.Customer_Estimate_Flow[0].new_elevator_availability;
      document.querySelector("#vmd1 .vmd2 .vmd2c2 .unpacking span").innerHTML =
        data.Customer_Estimate_Flow[0].unpacking_service;
      document.querySelector("#vmd1 .vmd2 .vmd2c2 .dist span").innerHTML =
        data.Customer_Estimate_Flow[0].new_parking_distance;

      //second ------------------------------------------------------------------------>
      document.querySelector(".container2 .one .col1 .userid").innerHTML =
        data.Customer_Estimate_Flow[1].user_id;
      document.querySelector(".container2 .one .col1 .propertySize").innerHTML =
        data.Customer_Estimate_Flow[1].property_size;
      document.querySelector(".container2 .one .col2 .city").innerHTML =
        data.Customer_Estimate_Flow[1].moving_from;
      document.querySelector(".container2 .one .col3 .movingOn").innerHTML =
        data.Customer_Estimate_Flow[1].moving_on;
      document.querySelector(".container2 .one .col4 .city").innerHTML =
        data.Customer_Estimate_Flow[1].moving_to;
      document.querySelector(".container2 .two .orderDate").innerHTML =
        data.Customer_Estimate_Flow[1].date_created;
      document.querySelector(".container2 .two .vendor").innerHTML =
        data.Customer_Estimate_Flow[1].vendor_id;
      document.querySelector(".container2 .two .orderTotal").innerHTML =
        data.Customer_Estimate_Flow[1].quote.Total;

      //living room
      document.querySelector(
        "#vmd2 .vmd1 .vmd1c1 .itemsDetails .lr1"
      ).innerHTML =
        data.Customer_Estimate_Flow[1].items.rooms.living_room.center_table;
      document.querySelector(
        "#vmd2 .vmd1 .vmd1c1 .itemsDetails .lr2"
      ).innerHTML =
        data.Customer_Estimate_Flow[1].items.rooms.living_room.computer_table;
      document.querySelector(
        "#vmd2 .vmd1 .vmd1c1 .itemsDetails .lr3"
      ).innerHTML =
        data.Customer_Estimate_Flow[1].items.rooms.living_room.foldable_chair;
      document.querySelector(
        "#vmd2 .vmd1 .vmd1c1 .itemsDetails .lr4"
      ).innerHTML =
        data.Customer_Estimate_Flow[1].items.rooms.living_room.home_theater;
      document.querySelector(
        "#vmd2 .vmd1 .vmd1c1 .itemsDetails .lr5"
      ).innerHTML =
        data.Customer_Estimate_Flow[1].items.rooms.living_room.non_foldable_chair;
      //other
      document.querySelector(
        "#vmd2 .vmd1 .vmd1c1 .itemsDetails .o1"
      ).innerHTML =
        data.Customer_Estimate_Flow[1].items.rooms.others.center_table;
      document.querySelector(
        "#vmd2 .vmd1 .vmd1c1 .itemsDetails .o2"
      ).innerHTML =
        data.Customer_Estimate_Flow[1].items.rooms.others.computer_table;
      document.querySelector(
        "#vmd2 .vmd1 .vmd1c1 .itemsDetails .o3"
      ).innerHTML =
        data.Customer_Estimate_Flow[1].items.rooms.others.foldable_chair;
      document.querySelector(
        "#vmd2 .vmd1 .vmd1c1 .itemsDetails .o4"
      ).innerHTML =
        data.Customer_Estimate_Flow[1].items.rooms.others.home_theater;
      document.querySelector(
        "#vmd2 .vmd1 .vmd1c1 .itemsDetails .o5"
      ).innerHTML =
        data.Customer_Estimate_Flow[1].items.rooms.others.non_foldable_chair;
      //bedroom
      document.querySelector(
        "#vmd2 .vmd1 .vmd1c2 .itemsDetails .br1"
      ).innerHTML =
        data.Customer_Estimate_Flow[1].items.rooms.bed_room.center_table;
      document.querySelector(
        "#vmd2 .vmd1 .vmd1c2 .itemsDetails .br2"
      ).innerHTML =
        data.Customer_Estimate_Flow[1].items.rooms.bed_room.computer_table;
      document.querySelector(
        "#vmd2 .vmd1 .vmd1c2 .itemsDetails .br3"
      ).innerHTML =
        data.Customer_Estimate_Flow[1].items.rooms.bed_room.foldable_chair;
      document.querySelector(
        "#vmd2 .vmd1 .vmd1c2 .itemsDetails .br4"
      ).innerHTML =
        data.Customer_Estimate_Flow[1].items.rooms.bed_room.home_theater;
      document.querySelector(
        "#vmd2 .vmd1 .vmd1c2 .itemsDetails .br5"
      ).innerHTML =
        data.Customer_Estimate_Flow[1].items.rooms.bed_room.non_foldable_chair;
      //kitchen
      document.querySelector(
        "#vmd2 .vmd1 .vmd1c3 .itemsDetails .k1"
      ).innerHTML =
        data.Customer_Estimate_Flow[1].items.rooms.kitchen.center_table;
      document.querySelector(
        "#vmd2 .vmd1 .vmd1c3 .itemsDetails .k2"
      ).innerHTML =
        data.Customer_Estimate_Flow[1].items.rooms.kitchen.computer_table;
      document.querySelector(
        "#vmd2 .vmd1 .vmd1c3 .itemsDetails .k3"
      ).innerHTML =
        data.Customer_Estimate_Flow[1].items.rooms.kitchen.foldable_chair;
      document.querySelector(
        "#vmd2 .vmd1 .vmd1c3 .itemsDetails .k4"
      ).innerHTML =
        data.Customer_Estimate_Flow[1].items.rooms.kitchen.home_theater;
      document.querySelector(
        "#vmd2 .vmd1 .vmd1c3 .itemsDetails .k5"
      ).innerHTML =
        data.Customer_Estimate_Flow[1].items.rooms.kitchen.non_foldable_chair;

      document.querySelector("#vmd2 .vmd2 .vmd2c1 .floorNo span").innerHTML =
        data.Customer_Estimate_Flow[1].old_floor_no;
      document.querySelector("#vmd2 .vmd2 .vmd2c1 .elevator span").innerHTML =
        data.Customer_Estimate_Flow[1].old_elevator_availability;
      document.querySelector("#vmd2 .vmd2 .vmd2c1 .packing span").innerHTML =
        data.Customer_Estimate_Flow[1].packing_service;
      document.querySelector("#vmd2 .vmd2 .vmd2c1 .dist span").innerHTML =
        data.Customer_Estimate_Flow[1].old_parking_distance;

      document.querySelector("#vmd2 .vmd2 .vmd2c2 .floorNo span").innerHTML =
        data.Customer_Estimate_Flow[1].new_floor_no;
      document.querySelector("#vmd2 .vmd2 .vmd2c2 .elevator span").innerHTML =
        data.Customer_Estimate_Flow[1].new_elevator_availability;
      document.querySelector("#vmd2 .vmd2 .vmd2c2 .unpacking span").innerHTML =
        data.Customer_Estimate_Flow[1].unpacking_service;
      document.querySelector("#vmd2 .vmd2 .vmd2c2 .dist span").innerHTML =
        data.Customer_Estimate_Flow[1].new_parking_distance;

      //third ---------------------------------------------------------------------------------->>
      document.querySelector(".container3 .one .col1 .userid").innerHTML =
        data.Customer_Estimate_Flow[2].user_id;
      document.querySelector(".container3 .one .col1 .propertySize").innerHTML =
        data.Customer_Estimate_Flow[2].property_size;
      document.querySelector(".container3 .one .col2 .city").innerHTML =
        data.Customer_Estimate_Flow[2].moving_from;
      document.querySelector(".container3 .one .col3 .movingOn").innerHTML =
        data.Customer_Estimate_Flow[2].moving_on;
      document.querySelector(".container3 .one .col4 .city").innerHTML =
        data.Customer_Estimate_Flow[2].moving_to;
      document.querySelector(".container3 .two .orderDate").innerHTML =
        data.Customer_Estimate_Flow[2].date_created;

      //living room
      document.querySelector(
        "#vmd3 .vmd1 .vmd1c1 .itemsDetails .lr1"
      ).innerHTML =
        data.Customer_Estimate_Flow[2].items.rooms.living_room.center_table;
      document.querySelector(
        "#vmd3 .vmd1 .vmd1c1 .itemsDetails .lr2"
      ).innerHTML =
        data.Customer_Estimate_Flow[2].items.rooms.living_room.computer_table;
      document.querySelector(
        "#vmd3 .vmd1 .vmd1c1 .itemsDetails .lr3"
      ).innerHTML =
        data.Customer_Estimate_Flow[2].items.rooms.living_room.foldable_chair;
      document.querySelector(
        "#vmd3 .vmd1 .vmd1c1 .itemsDetails .lr4"
      ).innerHTML =
        data.Customer_Estimate_Flow[2].items.rooms.living_room.home_theater;
      document.querySelector(
        "#vmd3 .vmd1 .vmd1c1 .itemsDetails .lr5"
      ).innerHTML =
        data.Customer_Estimate_Flow[2].items.rooms.living_room.non_foldable_chair;
      //other
      document.querySelector(
        "#vmd3 .vmd1 .vmd1c1 .itemsDetails .o1"
      ).innerHTML =
        data.Customer_Estimate_Flow[2].items.rooms.others.center_table;
      document.querySelector(
        "#vmd3 .vmd1 .vmd1c1 .itemsDetails .o2"
      ).innerHTML =
        data.Customer_Estimate_Flow[2].items.rooms.others.computer_table;
      document.querySelector(
        "#vmd3 .vmd1 .vmd1c1 .itemsDetails .o3"
      ).innerHTML =
        data.Customer_Estimate_Flow[2].items.rooms.others.foldable_chair;
      document.querySelector(
        "#vmd3 .vmd1 .vmd1c1 .itemsDetails .o4"
      ).innerHTML =
        data.Customer_Estimate_Flow[2].items.rooms.others.home_theater;
      document.querySelector(
        "#vmd3 .vmd1 .vmd1c1 .itemsDetails .o5"
      ).innerHTML =
        data.Customer_Estimate_Flow[2].items.rooms.others.non_foldable_chair;
      //bedroom
      document.querySelector(
        "#vmd3 .vmd1 .vmd1c2 .itemsDetails .br1"
      ).innerHTML =
        data.Customer_Estimate_Flow[2].items.rooms.bed_room.center_table;
      document.querySelector(
        "#vmd3 .vmd1 .vmd1c2 .itemsDetails .br2"
      ).innerHTML =
        data.Customer_Estimate_Flow[2].items.rooms.bed_room.computer_table;
      document.querySelector(
        "#vmd3 .vmd1 .vmd1c2 .itemsDetails .br3"
      ).innerHTML =
        data.Customer_Estimate_Flow[2].items.rooms.bed_room.foldable_chair;
      document.querySelector(
        "#vmd3 .vmd1 .vmd1c2 .itemsDetails .br4"
      ).innerHTML =
        data.Customer_Estimate_Flow[2].items.rooms.bed_room.home_theater;
      document.querySelector(
        "#vmd3 .vmd1 .vmd1c2 .itemsDetails .br5"
      ).innerHTML =
        data.Customer_Estimate_Flow[2].items.rooms.bed_room.non_foldable_chair;
      //kitchen
      document.querySelector(
        "#vmd3 .vmd1 .vmd1c3 .itemsDetails .k1"
      ).innerHTML =
        data.Customer_Estimate_Flow[2].items.rooms.kitchen.center_table;
      document.querySelector(
        "#vmd3 .vmd1 .vmd1c3 .itemsDetails .k2"
      ).innerHTML =
        data.Customer_Estimate_Flow[2].items.rooms.kitchen.computer_table;
      document.querySelector(
        "#vmd3 .vmd1 .vmd1c3 .itemsDetails .k3"
      ).innerHTML =
        data.Customer_Estimate_Flow[2].items.rooms.kitchen.foldable_chair;
      document.querySelector(
        "#vmd3 .vmd1 .vmd1c3 .itemsDetails .k4"
      ).innerHTML =
        data.Customer_Estimate_Flow[2].items.rooms.kitchen.home_theater;
      document.querySelector(
        "#vmd3 .vmd1 .vmd1c3 .itemsDetails .k5"
      ).innerHTML =
        data.Customer_Estimate_Flow[2].items.rooms.kitchen.non_foldable_chair;

      document.querySelector("#vmd3 .vmd2 .vmd2c1 .floorNo span").innerHTML =
        data.Customer_Estimate_Flow[2].old_floor_no;
      document.querySelector("#vmd3 .vmd2 .vmd2c1 .elevator span").innerHTML =
        data.Customer_Estimate_Flow[2].old_elevator_availability;
      document.querySelector("#vmd3 .vmd2 .vmd2c1 .packing span").innerHTML =
        data.Customer_Estimate_Flow[2].packing_service;
      document.querySelector("#vmd3 .vmd2 .vmd2c1 .dist span").innerHTML =
        data.Customer_Estimate_Flow[2].old_parking_distance;

      document.querySelector("#vmd3 .vmd2 .vmd2c2 .floorNo span").innerHTML =
        data.Customer_Estimate_Flow[2].new_floor_no;
      document.querySelector("#vmd3 .vmd2 .vmd2c2 .elevator span").innerHTML =
        data.Customer_Estimate_Flow[2].new_elevator_availability;
      document.querySelector("#vmd3 .vmd2 .vmd2c2 .unpacking span").innerHTML =
        data.Customer_Estimate_Flow[2].unpacking_service;
      document.querySelector("#vmd3 .vmd2 .vmd2c2 .dist span").innerHTML =
        data.Customer_Estimate_Flow[2].new_parking_distance;
    });
};

const seeMoreDetails = () => {
  var useButton = document.getElementsByClassName("useButton");

  useButton[0].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = document.querySelector("#vmd1");
    console.log(content);
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });

  useButton[1].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = document.querySelector("#vmd2");
    console.log(content);
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });

  useButton[2].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = document.querySelector("#vmd3");
    console.log(content);
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
};

fetchData();
seeMoreDetails();
