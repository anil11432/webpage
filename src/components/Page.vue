<template>
<div class="container">
    <div class="row">
        <div class="row">
            <div class="dropdown col-md-3" v-dropdown>
                <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Select Template
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li v-for="(template, index) in templates" @click="templateItem(index)" :key="index" class="list-group-item" >{{template.name}}</li>
                </ul>
            </div>
            <div class="Image-input col-md-5">
                    Choose Background Image
                    <input @change="previewThumbnail" class="Image-input__input" name="thumbnail" type="file" accept="image/*">
            </div>
        </div>
        <div class="col-md-3">
            <button @click="addFrame()" class="btn btn-danger">Add Frame</button>
            <button class="btn btn-success btn-xl" @click="save()">SAVE</button>
            <ul class="list-group" style="width: 250px;">
                <li class="list-group-item">
                    <div class="form-group">
                        <label for="name">Width: {{width}}</label>
                        <input v-model="width" type="number" class="form-control">
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="form-group">
                        <label for="name">Height: {{height}}</label>
                        <input v-model="height" type="number" class="form-control">
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="form-group">
                        <label for="name">Top: {{top}}</label>
                        <input v-model="top"  type="number" class="form-control">
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="form-group">
                        <label for="name">Left: {{left}}</label>
                        <input v-model="left" type="number" class="form-control">
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="form-group">
                        <label for="name">rotate: {{rotate}}</label>
                        <input v-model="rotate" type="number" class="form-control">
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="form-group">
                        <label for="name">min-width: {{minwidth}}</label>
                        <input v-model="minwidth" type="number" class="form-control">
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="form-group">
                        <label for="name">max-width: {{maxwidth}}</label>
                        <input v-model="maxwidth" type="number" class="form-control">
                    </div>
                </li>          
            </ul>
        </div>
        <div class="col-md-9 n">
            <img v-show="imageSrc" id="backImage" class="Image" :src="imageSrc">
            <ul style="list-style-type : none;">
                <li v-bind:style="{'width': item.width + '%', 'height': item.height + '%', 'top': item.top + '%', 'left' : item.left + '%', 'transform' :'rotate('+item.rotate + 'deg)'}"
                 v-for="(item, index) in items" v-on:click="selectDiv(index)" :key="index" class="listItem">  
                <div class="glyphicon glyphicon-remove close" @click="closeFrame(index)"></div>
                </li>
            </ul>
        </div>
    </div> 
</div>
</template>
<script>
export default {
    data(){
        return{
            imageSrc: '',
            width: '',
            height : '',
            top : '',
            left : '',
            rotate : '',
            minwidth : '',
            maxwidth : '',
            items:[],
            templates: [{name: "Template-1"},{name: "Template-2"},{name: "Template-3"}],
            activeIndex: 0
        }
    },
    props: [''],

    methods: {
        template: function(event){
            var targetId = event.currentTarget.id;
            console.log(targetId);
        },
        previewThumbnail: function(event) {
            var input = event.target;

            if (input.files && input.files[0]) {
                var reader = new FileReader();

                var vm = this;

                reader.onload = function(e) {
                vm.imageSrc = e.target.result;
                console.log(this.imagesrc);
                }
                reader.readAsDataURL(input.files[0]);
            }
        },
        addFrame: function(){
            var item = {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                rotate: 0,
                minwidth: 0,
                maxwidth: 0
            };
            this.items.push(item);
            var my_array = this.items;
            var last_element = my_array.length - 1;
            this.activeIndex = last_element;
            var actindex = this.activeIndex;
            // selectDiv(actindex);
            this.width = this.items[actindex].width;
            this.height = this.items[actindex].height;
            this.top = 0;
            this.left = 0;
            this.rotate = 0;
        },
        closeFrame: function(index){
            this.items.splice(index,1);
        },
        templateItem: function(index){
            console.log("template item index :",index);
        },
        selectDiv: function(index){
            this.activeIndex = index;
            this.width = this.items[index].width,
            this.height = this.items[index].height,
            this.top = this.items[index].top,
            this.left = this.items[index].left,
            this.rotate = this.items[index].rotate
            console.log(this.activeIndex);
        },
        save: function(){
            alert('template saved on console');
            var backimage = document.getElementById("backImage").src;
            // console.log(backimage);
            console.log('image.jpeg');
            console.log("frames",this.items);
        }
    },
    watch: {
        width(value) {
            this.items[this.activeIndex].width = value;
        },
        height(value) {
            this.items[this.activeIndex].height = value;
        },
        top(value) {
            this.items[this.activeIndex].top = value;
        },
        left(value) {
            this.items[this.activeIndex].left = value;
        },
        rotate(value) {
            this.items[this.activeIndex].rotate = value;
        }
    }
  
}
</script>
<style scoped>
    .close{
        position: absolute;
        top: 0;
        right: 0;

    }
    .listItem{
        border: 2px solid yellow;
        position: absolute;
    }
    .n{
        position: relative;
        padding: 0;
    }
    .Image{
        position: relative;
        width: 100%;
    }
    .Image-input{
        border: 2px solid grey;
        margin: 10px;

    }
    .Image-input__input{
        padding: 5px;
    }
    .list-group-item{
        cursor: pointer;
    }
</style>