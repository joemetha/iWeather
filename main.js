import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, Image, Button, ListView, ScrollView, Picker,TouchableHighlight, Alert} from 'react-native'
import SegmentedControlTab from 'react-native-segmented-control-tab'

const styles = StyleSheet.create({
containerCol: {
        marginTop: 0,
        flex: 1,
        flexDirection: 'column',   
    },
    containerRow: {
        marginTop: 0,
        flex: 1,
        flexDirection: 'row',
    },
    _head: {
        flex: 0.1,
        backgroundColor:'rgba(0, 0, 0, 0.65)',
        flexDirection: 'row',
    },
    _headText: {
        textAlign:'center',
        marginTop:'auto',
        fontSize:26,
        color:'white'
    },
    _text: {
        textAlign:'center',
        fontSize:14,
        color:'#5DADE2'
    },
    _text1: {
        textAlign:'center',
        fontSize:14,
        color:'white'
    },
    _text2: {
        textAlign:'center',
        fontSize:10,
        color:'white',
    },
    _tempText:{
        marginLeft:120,
        fontSize:84,
        color:'white'
    },
        _proText:{
        textAlign:'center',
        fontSize:26,
        color:'white'
    },
    _console: {
        marginTop:10,
        flex: 0.1,
        flexDirection: 'row',
    },
    _body: {
        flex: 1,
        flexDirection: 'row',
    },
        _body1: {
        flex: 0.7,
        flexDirection: 'row',
        
    },
        _body2: {
        flex: 0.3,
        flexDirection: 'row',
        
        marginTop:15,
        marginBottom:15
    },
    _footer: {
        flex: 0.095,
backgroundColor:'rgba(0, 0, 0, 0.65)',
        flexDirection: 'row',
     
    },
    
    _console1: {
        flex: 1.2,
        flexDirection: 'row',
    },
    _edge: {
        flex: 0.08,
        flexDirection: 'row',
    },
    
        _console2: {
        flex: 0.05,
        flexDirection: 'row',
    },
        _console3: {
        flex: 0.5,
        flexDirection: 'row',
    },
    _full:{
        flex:1,
       
    },
    _input:{
        color:'lightgray'
    },
    _subBody1:{
        flex: 1.7,
        flexDirection: 'row',
        backgroundColor:'rgba(0, 0, 0, 0.65)',
        borderRadius:10
    },
    _insubBody1:{
        flex: 1,
        flexDirection: 'row',
        
    },
    _insubBody2:{
        flex: 0.175,
        flexDirection: 'row',
        
    },
        _cel1:{
        flex: 0.3,
        flexDirection: 'row',
    },
        _cel2:{
        flex: 0.4,
        flexDirection: 'row',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
  },
    _container: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'cover',
  },
   _humid:{
        flex: 1,
        flexDirection: 'row',
        borderRightWidth:1,
        borderColor:'white'  
    },
   _humid2:{
        flex: 1,
        flexDirection: 'row',       
    },
    _subBody2:{
        flex: 1.7,
        flexDirection: 'row', 
        backgroundColor:'rgba(0, 0, 0, 0.65)',
        borderRadius:10
    },
    _forcast:{
        flex: 1,
        flexDirection: 'row',
        marginTop:15     
    },
    _footer1: {
        flex: 1,

        flexDirection: 'row',

    },
        _footer2: {
        flex: 0.8,
        backgroundColor:'#2196f3',
        flexDirection: 'row',
        borderRadius:3,
        marginTop:5,
        marginBottom:5  
    },

})


class main extends Component{
        constructor(props) {
        super(props);
            this.state = { 
                name:'Chiang mai',
                message:'nothing',
                description:'',
                ids: '6f6e1e13be298aef85facfa6f251c0f3',
                icon:'https://lh3.googleusercontent.com/ajMMLTx53XZXTM15J0F9nZ9Rdt_eBLjQFkNbvU3vnXGPlmrwgrNRtXoZ2rPEHsWZcPNk=w300',
                unit:'C',
                temp:0,
                selectedIndex: 0,
                province:'Chiang mai',
                humid:0,
                wind:0,
                date1:'',
                date2:'',
                date3:'',
                date4:'',
                icon1:'http://openweathermap.org/img/w/10n.png',
                icon2:'http://openweathermap.org/img/w/10n.png',
                icon3:'http://openweathermap.org/img/w/10n.png',
                icon4:'http://openweathermap.org/img/w/10n.png',
                high1:'',
                low1:'',
                high2:'',
                low2:'',
                high3:'',
                low3:'',
                high4:'',
                low4:'',
                theme:'https://wallpaperscraft.com/image/clouds_sea_storm_gloomy_heavy_elements_50210_1080x1920.jpg',
           };
        this._run();
    }

    handleIndexChange = (index) => {
      this.setState({
        ...this.state,
        selectedIndex: index,
      });
    }


_run(){
   
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+this.state.name+'&appid='+this.state.ids)
        .then((response) => response.json())
        .then((responseJSON)=>{
            console.log(responseJSON);
            this.setState({
                name: this.state.name,
                message: responseJSON.weather[0].main,
                icon: 'http://openweathermap.org/img/w/'+responseJSON.weather[0].icon+'.png',
                description: responseJSON.weather[0].description,
                temp: responseJSON.main.temp,
                province:responseJSON.name,
                humid: responseJSON.main.humidity,
                wind: responseJSON.wind.speed,
            });
        })
        .catch((error)=>{
            console.warn(error);
        });
    this._runForcast();
}

    _runForcast(){

            fetch('http://api.openweathermap.org/data/2.5/forecast?q='+this.state.name+'&appid='+this.state.ids)
            .then((response) => response.json())
            .then((responseJSON)=>{
                console.log(responseJSON);
                this.setState({
                     date1: responseJSON.list[8].dt_txt,
                     date2: responseJSON.list[17].dt_txt,
                     date3: responseJSON.list[26].dt_txt,
                     date4: responseJSON.list[34].dt_txt,
                     icon1: 'http://openweathermap.org/img/w/'+responseJSON.list[8].weather[0].icon+'.png',
                     icon2: 'http://openweathermap.org/img/w/'+responseJSON.list[17].weather[0].icon+'.png',
                     icon3: 'http://openweathermap.org/img/w/'+responseJSON.list[26].weather[0].icon+'.png',
                     icon4: 'http://openweathermap.org/img/w/'+responseJSON.list[34].weather[0].icon+'.png',
                     high1: responseJSON.list[8].main.temp,
                     high2: responseJSON.list[17].main.temp,
                     high3: responseJSON.list[26].main.temp,
                     high4: responseJSON.list[34].main.temp,
                    
             });
            })
            .catch((error)=>{
                console.warn(error);
            });
    }
    
    _onTheme(){
        Alert.alert(
  'Selection',
  'Select the theme that you want to change',
  [
    {text: 'Theme1', onPress: () => this._change1()},
    {text: 'Theme2', onPress: () => this._change2()},
    {text: 'Theme3', onPress: () => this._change3()},
    
    
  ],
  { cancelable: false }
)
    }

        _change1(){
         this.setState({
             theme:'https://s-media-cache-ak0.pinimg.com/originals/64/84/6d/64846daa5a346126ef31c3f1fcbc4703.jpg'
         })
        
    }
    _change2(){
         this.setState({
             theme:'https://4.bp.blogspot.com/-uFDX3-EqtKY/U4jeOqrvhBI/AAAAAAAA7IQ/QDxzI84yYp8/s0/Basilica+of+Superga+after+a+storm_smartphone.jpg'
         })
        
    }
                _change3(){
         this.setState({
             theme:'https://wallpaperscraft.com/image/clouds_sea_storm_gloomy_heavy_elements_50210_1080x1920.jpg'
         })
        
    }

    render(){
        var calTemp;
        CSS='styles';
        if(this.state.selectedIndex===0){
            calTemp = <Text style={styles._tempText}>{parseInt(this.state.temp-273.15)}°</Text>;
            hTemp1=<Text style={styles._text1}>{parseInt(this.state.high1-273.15)}°</Text>;
            hTemp2=<Text style={styles._text1}>{parseInt(this.state.high2-273.15)}°</Text>;
            hTemp3=<Text style={styles._text1}>{parseInt(this.state.high3-273.15)}°</Text>;
            hTemp4=<Text style={styles._text1}>{parseInt(this.state.high4-273.15)}°</Text>;
            
        }
        else{
            calTemp = <Text style={styles._tempText}>{parseInt(this.state.temp* (9/5) - 459.67, 10)}°</Text>;
            hTemp1=<Text style={styles._text1}>{parseInt(this.state.high1* (9/5) - 459.67, 10)}°</Text>;
            hTemp2=<Text style={styles._text1}>{parseInt(this.state.high2* (9/5) - 459.67, 10)}°</Text>;
            hTemp3=<Text style={styles._text1}>{parseInt(this.state.high3* (9/5) - 459.67, 10)}°</Text>;
            hTemp4=<Text style={styles._text1}>{parseInt(this.state.high4* (9/5) - 459.67, 10)}°</Text>;
        }
        return(
            
            <Image
                source={{uri:this.state.theme}}
                style={styles._container}>
            <View style={styles.containerCol}>
                     
                <View style={styles._head}>
                    <View style={styles._full}>
                        <Text style={styles._headText}>iWeather</Text>
                    </View>
                </View>
                <View style={styles._console}>
                    <View style={styles._edge}>
                    </View>
                    <View style={styles._console1}>
                        <View style={styles._full}>
                            <TextInput
                            style={{height: 40, borderColor: 'gray'}}
                            onChangeText={(name) => this.setState({name})}
                            value={this.state.name}
                        
                            />
                        </View>
                    </View>
                    <View style={styles._console2}>
                    </View>

                    <View style={styles._console3}>
                        <View style={styles._full}>
                            <Button
                            onPress={()=>this._run()}
                            title="GO"
                            //color="#841584"
                            />
                        </View>
                    </View>
                    <View style={styles._edge}>
                    </View>
                </View>
                <View style={styles._body}>
                    <View style={styles.containerCol}>
                        <View style={styles._body1}>
                            <View style={styles._edge}>
                            </View>
                            <View style={styles._subBody1}>
                                <View style={styles.containerCol}>


                                     <View style={styles._insubBody2}>
                                        <View style={styles._cel1}>
                                        </View>   
                                        <View style={styles._cel2}>
                                        <View style={styles._full}>
                                            <View style={{marginTop:10}}>
                                                 <SegmentedControlTab
                                                    values={['°C', '°F']}
                                                    selectedIndex={this.state.selectedIndex}
                                                    onTabPress={this.handleIndexChange}
                                                />
                                            </View>

                                        </View>
                                        </View>
                                        <View style={styles._cel1}>
                                        </View>  
                                    </View> 


                                    <View style={styles._insubBody1}>
                                    <View style={styles._full}>
                                        {/* <Image source ={{uri:this.state.icon}} resizeMode='cover' style={{width:200, height: 200, alignSelf:'center'}}></Image> */}
                                        <Text style={styles._proText}>{this.state.province} </Text>
                                        <Text style={styles._text}>{this.state.description}</Text>
                                        
                                        {calTemp}
                                        {/* <Text style={styles._text}>Wheather NOW! ={this.state.message}</Text> */}
                                        <View style={styles._humid2}>
                                            <View style={styles._humid}>
                                                <View style={styles._full}>
                                                    <Image source ={{uri:'https://maxcdn.icons8.com/Share/icon/color/Industry//water1600.png'}} resizeMode='cover' style={{width:20, height: 20, alignSelf:'center'}}></Image>
                                                    <Text style={styles._text}>Humidity</Text>
                                                    <Text style={styles._text1}>{this.state.humid}%</Text>
                                                </View>
                                            </View>

                                            <View style={styles._humid2}>
                                                <View style={styles._full}>
                                                    <Image source ={{uri:'http://www.javalgo.com/img/wind.png'}} resizeMode='cover' style={{width:20, height: 20, alignSelf:'center'}}></Image>
                                                    <Text style={styles._text}>Wind</Text>
                                                    <Text style={styles._text1}>{this.state.wind}m/s</Text>
                                                </View>
                                            </View>
                                        </View>

                                    </View>
                                    </View>
                                </View>

                            </View>
                            <View style={styles._edge}>
                            </View>
                        </View>
                        <View style={styles._body2}>
                            <View style={styles._edge}>
                            </View>
                            <View style={styles._subBody2}>
                                <View style={styles._forcast}>
                                    <View style={styles._full}>
                                        <Text style={styles._text2}>{this.state.date1}</Text>
                                        
                                        <Image source ={{uri:this.state.icon1}} resizeMode='cover' style={{width:40, height: 40, alignSelf:'center'}}></Image>
                                        {hTemp1}
                                    </View>
                                </View>
                                <View style={styles._forcast}>
                                    <View style={styles._full}>
                                        <Text style={styles._text2}>{this.state.date2}</Text>
                                        <Image source ={{uri:this.state.icon2}} resizeMode='cover' style={{width:40, height: 40, alignSelf:'center'}}></Image>
                                        {hTemp2}
                                    </View>
                                </View>
                                <View style={styles._forcast}>
                                    <View style={styles._full}>
                                        <Text style={styles._text2}>{this.state.date3}</Text>
                                        <Image source ={{uri:this.state.icon3}} resizeMode='cover' style={{width:40, height: 40, alignSelf:'center'}}></Image>
                                        {hTemp3}
                                    </View>
                                </View>
                                <View style={styles._forcast}>
                                    <View style={styles._full}>
                                        <Text style={styles._text2}>{this.state.date4}</Text>
                                        <Image source ={{uri:this.state.icon4}} resizeMode='cover' style={{width:40, height: 40, alignSelf:'center'}}></Image>
                                        {hTemp4}
                                    </View>
                                </View>
                            </View>
                            <View style={styles._edge}>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles._footer}>
                    <View style={styles._footer1}>
                    </View>
                    <View style={styles._footer2}>
                        <TouchableHighlight onPress={()=>this._onTheme()} style={styles._full}>
                        
                            <Text style={{textAlign:'center', marginTop:5, fontSize:14,color:'black'}}>Theme</Text>
                        
                        </TouchableHighlight>
                    </View>
                    <View style={styles._footer1}>
                    </View>
                </View>
                
            </View>
            </Image>
            
            
        )
    }
}

export default main