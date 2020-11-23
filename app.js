var projectSourceTemplate=`
<button class='project-source' id='btn-%Id%' onclick='%Click%'>
        %Text%
</button> 
`
var projectTagTemplate=`
<div class='project-tag'>
    %Tag%
</div>`
var projectContainerTemplate=`
<div class='slide-in-project-container'>
                    <img class='project-image' src='%Image%'>
                    <div class='project-content'>

                        <div class='project-heading'>
                        <i class='material-icons-outlined'>code</i>
                            %Heading%
                        </div>

                        <div class='project-description'>
                            %Description%
                        </div>

                        <div class='project-source-list'>
                             %Sources%
                        </div>

                        <div class='project-tag-list'>
                            %Tags%
                        </div>

                    </div>
                </div>
`

var AboutTemplate = `
<div class='slide-in-content-%Side%'>
                    <div class='slide-in-heading'>
                        <i class='slide-in-icon material-icons'>%Icon%</i>
                        <div class='slide-in-header-text'>
                        %Heading%
                        </div>
                    </div>
                    <div class='slide-in-description'>
                        %Description%
                    </div>
</div>
`

var About = {
    icon: null,
    heading: null,
    descripton: null,
    side: null
}

var MyAbouts = (function(){
    var curSide = 'right';
    var getSide = function(){
        if(curSide==='left'){
            curSide = 'right';
            return 'right';
        }
        else{
            curSide = 'left';
            return 'left';
        }
    }

    var background = Object.create(About,{
        icon:   {value: 'public'},
        heading: {value: 'Background'},
        description: {value: 'Born and raised in Kerala, Rohan spent 99.999% of his life in Kerala. '},
        side: {value: getSide()}
    });

    var education = Object.create(About,{
        icon:   {value: 'school'},
        heading: {value: 'Education'},
        description: {value: 'Rohan is a Class 12th(Science) graduate from Kendriya Vidyalaya Ezhimala.<br>He learnt programming from Udemy, Codecademy, Youtube and from his school.'},
        side: {value: getSide()}
    });

    var socialLife = Object.create(About,{
        icon:   {value: 'emoji_people'},
        heading: {value: 'Social Life'},
        description: {value: 'Socially akward. Has a small friend circle. Is a typical introvert.'},
        side: {value: getSide()}
    });

    var goals = Object.create(About,{
        icon:   {value: 'track_changes'},
        heading: {value: 'Goals'},
        description: {value: 'Rohan always thought that landing a good job was his main goal.<br>Lately he\'s getting to know that being happy in life is his main goal.<br>Apart from that he\'s trying to master the art of computer science but is still trying to figure out which part of computer science he\'d like to specialize in.'},
        side: {value: getSide()}
    });

    var skills = Object.create(About,{
        icon:   {value: 'work'},
        heading: {value: 'Skills'},
        description: {value: 'Fluent in C#, Python and JavaScript. Know C upto the extend of programming an arduino. <br> Skilled in socket programming(client server).<br>Experienced in making projects with arduino.'},
        side: {value: getSide()}
    });

    var freeTime = Object.create(About,{
        icon:   {value: 'watch_later'},
        heading: {value: 'Leisure Activities'},
        description: {value: 'Extremely addicted to movies. Can watch at least 100 movies in 2 months.<br>YouTube is the next favourite social media. <br> Will find him occassionally scrolling through reddit.'},
        side: {value: getSide()}
    });

    return {
        aboutList : [
            background,
            education,
            socialLife,
            goals,
            skills,
            freeTime
        ]
    }
})();


var Project = {
    title: null,
    description: null,
    image: null,
    sources:null,
    tags:[]
}

var MyProjects = (function(){
    var Source = {
        text: null,
        link: null
    }

    var jsonParser = Object.create(Project,{
        title:{value:'Custom JSON Parser'},
        description:{value:'A C# class library for parsing complex json objects.'},
        image:{value: 'Images/project-placeholder.jpg'},
        sources: {value: [Object.create(Source,{text:{value:"Source"},link:{value:'https://github.com/rohananilkumar/JsonParser'}})]},
        tags:{value:['C#','Class Library']}
    })

    var mediaStream = Object.create(Project,{
        title:{value:'The Media Stream'},
        description:{value:'A server client software which can save and retrieve files from the server.'},
        image:{value: 'Images/project-placeholder.jpg'},
        sources: {value: [Object.create(Source,{text:{value:"Source"},link:{value:'https://github.com/rohananilkumar/TheMediaStream'}})]},
        tags:{value:['Python']}
    })

    var memoryGame = Object.create(Project,{
        title:{value:'Memory Game'},
        description:{value:'The good old memory game where one has to eliminate all cards by choosing two idendical cards at the same time.'},
        image:{value: 'Images/project-placeholder.jpg'},
        sources: {value: [Object.create(Source,{text:{value:"Source"},link:{value:'https://github.com/rohananilkumar/MemoryGame'}}), Object.create(Source,{text:{value:'Game'}, link:{value:'JSProjects/MemoryGame/index.html'}})]},
        tags:{value:['JavaScript']}
    })

    var snakeGame = Object.create(Project,{
        title:{value:'Snake Game'},
        description:{value:'Snake game that used to be pre-installed in old nokia phones got a new look.'},
        image:{value: 'Images/project-placeholder.jpg'},
        sources: {value: [Object.create(Source,{text:{value:"Source"},link:{value:'https://github.com/rohananilkumar/SnakeGame'}}), Object.create(Source,{text:{value:'Game'}, link:{value:'JSProjects/SnakeGame/index.html'}})]},
        tags:{value:['JavaScript']}
    })

    var budgety = Object.create(Project,{
        title:{value:'Budgety'},
        description:{value:'Budget Calculator and organiser. Note that the UI is not designed by Rohan and is not optimised for mobile.'},
        image:{value: 'Images/project-placeholder.jpg'},
        sources: {value: [Object.create(Source,{text:{value:"Source"},link:{value:'https://github.com/rohananilkumar/Budgety'}}), Object.create(Source,{text:{value:'Project Link'}, link:{value:'JSProjects/BudgetyApp/index.html'}})]},
        tags:{value:['JavaScript']}
    })

    var libraryManager = Object.create(Project,{
        title:{value:'Library Manager'},
        description:{value:'Library Manager for schools. Manages books and students. Uses MySQL as database.'},
        image:{value: 'Images/project-placeholder.jpg'},
        sources: {value: [Object.create(Source,{text:{value:"Source"},link:{value:'https://github.com/rohananilkumar/LibraryManager'}})]},
        tags:{value:['C#','MySQL']}
    })

    var ticTacToe = Object.create(Project,{
        title:{value:'TicTacToe'},
        description:{value:'Good Old TicTacToe digitized.<br> Is console based.'},
        image:{value: 'Images/project-placeholder.jpg'},
        sources: {value: [Object.create(Source,{text:{value:"Source"},link:{value:'https://github.com/rohananilkumar/TicTacToe'}})]},
        tags:{value:['Python']}
    })

    var blackJack = Object.create(Project,{
        title:{value:'BlackJack'},
        description:{value:'The gambling game.<br> Is console based.'},
        image:{value: 'Images/project-placeholder.jpg'},
        sources: {value: [Object.create(Source,{text:{value:"Source"},link:{value:'https://github.com/rohananilkumar/BlackJack'}})]},
        tags:{value:['Python']}
    })

    var crypto = Object.create(Project,{
        title:{value:'File Encryptor'},
        description:{value:'File Encryptor can encrypt/decrypt files and folers using AES encryption'},
        image:{value: 'Images/project-placeholder.jpg'},
        sources: {value: [Object.create(Source,{text:{value:"Source"},link:{value:'https://github.com/rohananilkumar/CryptoFileEncryptor'}})]},
        tags:{value:['C#']}
    })

    var weatherAnalyser = Object.create(Project,{
        title:{value:'Weather Analyser'},
        description:{value:'11th Grade Science project. Helps in reporting harsh weather conditions. Collaborated with <a href="https://instagram.com/_karthik_krishnan_2">Karthik Krishnan</a>.'},
        image:{value: 'Images/project-placeholder.jpg'},
        sources: {value: [Object.create(Source,{text:{value:"Source"},link:{value:'https://github.com/rohananilkumar/WeatherAnalyser'}})]},
        tags:{value:['C#','Python','C','Hardware']}
    })

    var smartHome = Object.create(Project,{
        title:{value:'Smart Home'},
        description:{value:'10th grade science project. Can control everyting from lights to doors using software.'},
        image:{value: 'Images/project-placeholder.jpg'},
        sources: {value: [Object.create(Source,{text:{value:"Source"},link:{value:'https://github.com/rohananilkumar/SmartHome'}})]},
        tags:{value:['C#','C','Hardware']}
    })

    var passwordEncryptor = Object.create(Project,{
        title:{value:'Password Encrptor'},
        description:{value:'Encrypts Password are returns the encrypted string which can then be decypted using a key.'},
        image:{value: 'Images/project-placeholder.jpg'},
        sources: {value: [Object.create(Source,{text:{value:"Source"},link:{value:'https://github.com/rohananilkumar/PasswordEncryptor'}})]},
        tags:{value:['C#']}
    })

    var projectList=[
        jsonParser,
        libraryManager,
        mediaStream,
        snakeGame,
        memoryGame,
        crypto,
        budgety,
        passwordEncryptor,
        ticTacToe,
        blackJack,
        weatherAnalyser,
        smartHome
    ]
    console.log(projectList)
    
    return{
        projectList:projectList
    }

})()

var showMobileError = function(){
    alert('Not supported on mobile browsers');
}

var UIController = (function(){
    var projectBtnLink = []
    var projectBtnNo = 1;

    var createAboutContainer = function(about){
        var newAbout = AboutTemplate;
        newAbout = newAbout.replace('%Heading%',about.heading);
        newAbout = newAbout.replace('%Icon%',about.icon);
        newAbout = newAbout.replace('%Description%',about.description);
        newAbout = newAbout.replace('%Side%',about.side);

        doms.aboutPage.insertAdjacentHTML('beforeend',newAbout);

    }

    var createProjectContainer = function(project){
        var tagsHTML = '';
        var sourcesHTML = '';

        project.tags.forEach((tag)=>{
            tagsHTML+=projectTagTemplate.replace('%Tag%',tag);
        });



        project.sources.forEach((source)=>{
            var newSourceTemplate = projectSourceTemplate;
            newSourceTemplate = newSourceTemplate.replace('%Text%',source.text);
            newSourceTemplate = newSourceTemplate.replace('%Id%',projectBtnNo);
            if(mobileCheck() && source.text !== 'Source' ){
                newSourceTemplate = newSourceTemplate.replace('%Click%',`showMobileError()`);
                
            }
            else{
                newSourceTemplate = newSourceTemplate.replace('%Click%',`controller.openURL(${projectBtnNo})`);
                console.log('Not Mobile');
            }
            projectBtnLink.push({btnNo: projectBtnNo, link: source.link});
            projectBtnNo++;
            sourcesHTML+= newSourceTemplate;
        })

        var finalHTML=projectContainerTemplate;
        finalHTML = finalHTML.replace('%Image%',project.image);
        finalHTML = finalHTML.replace('%Heading%',project.title);
        finalHTML = finalHTML.replace('%Description%',project.description);
        finalHTML = finalHTML.replace('%Sources%',sourcesHTML);
        finalHTML = finalHTML.replace('%Tags%',tagsHTML);
        //console.log(finalHTML);
        doms.projectPage.insertAdjacentHTML('beforeend',finalHTML);

    }

    var doms ={
        logoImage: document.getElementById('logo-image'),
        subMainText: document.querySelectorAll('.sub-main-text'),
        rohanText: document.querySelector('#rohan-text'),
        headContainer: document.getElementById('head-container'),
        mainText : document.querySelector('#main-text'),
        sideMainText : document.querySelector('#side-main-text'),
        age : document.getElementById('age'),
        projectsCount : document.getElementById('projects-count'),
        build : document.getElementById('build'),
        contentSelectorContainer: document.getElementById('content-selector-container'),
        contentSelector : document.querySelectorAll('.content-selector'),
        contentSelectorText : document.querySelectorAll('.content-selector-text'),
        slideInPanels: document.querySelectorAll('.slide-in-panel'),
        introHeader: document.querySelector('.intro-header'),
        introDescription:document.querySelector('.intro-description'),
        slideInPanel1 : document.querySelector('#slide-in-panel-1'),
        slideInPanelContainer : document.querySelector('#slide-in-panel-container'),
        projectPage: document.getElementById('slide-in-panel-3'),
        introPage: document.getElementById('slide-in-panel-1'),
        socialPage: document.getElementById('slide-in-panel-4'),
        aboutPage: document.getElementById('slide-in-panel-2'),
        projectsContainers: document.querySelectorAll('.slide-in-project-container')
     }

     var bringInPanel = function(panelId){
        var curPanel=document.getElementById('slide-in-panel-'+panelId);
        //console.log(curPanel);
        //window.scrollBy(0,200);
        doms.slideInPanels.forEach((panel)=>{
            if(panel.id===('slide-in-panel-'+panelId)){
                doms.slideInPanelContainer.insertAdjacentElement('beforeend',panel);
                setTimeout(()=>{panel.classList.add('slide-in-panel-visible')},10);
                
            }
            else{
                panel.classList.remove('slide-in-panel-visible');
                if(panel.parentNode===doms.slideInPanelContainer){
                    doms.slideInPanelContainer.removeChild(panel);
                }
                
            }
        })
     }

    return{

        doms: doms,
        projectBtnLink:projectBtnLink,

        
        mainTextAnimation : function(){
            doms.sideMainText.classList.add('side-main-text-visible');
            doms.sideMainText.classList.remove('side-main-text-invisible');
        },

        setSideText: function(age,projectsCount,pageViews){
            doms.age.textContent=age;
            doms.projectsCount.textContent=projectsCount;
        },

        windowSizeController: function(){
            //projectPanelResize();
            var width = window.innerWidth;
            var height = window.innerHeight;
            if(width<998){
                doms.mainText.classList.add('main-text-narrow-window');
                doms.sideMainText.classList.add('side-main-text-mobile');
                //console.log('small window');
            }
            else{
                doms.sideMainText.classList.remove('side-main-text-mobile');
                doms.mainText.classList.remove('main-text-narrow-window')
            }
            if(width<512){
                doms.contentSelectorContainer.classList.add('content-selector-container-narrow-window');
            }
            else{
                doms.contentSelectorContainer.classList.remove('content-selector-container-narrow-window');

            }
        }, 
        

        addUnderline : function(target){
            doms.contentSelector.forEach(element => {
                if(element !== target){
                    element.classList.remove('content-selector-underline');
                }
                else{
                    element.classList.add('content-selector-underline')
                }
            });
        },
        createAboutContainer:createAboutContainer,
        bringInPanel:bringInPanel,
        createProjectContainer:createProjectContainer,
        test: function(){
            doms.slideInPanel1.classList.add('slide-in-panel-visible');
            //doms.slideInPanelContainer.classList.remove('slide-in-panel-invisible');
        }
    }

})();

var controller = (function(UICtrl){

    var rearrangeForMobile = function(){
        var slideInHeader= document.querySelectorAll('.slide-in-header-text');
        var slideInDescription= document.querySelectorAll('.slide-in-description');

        var slideInProjectContainer = document.querySelectorAll('.slide-in-project-container');
        var projectImage = document.querySelectorAll('.project-image');
        var projectHeading = document.querySelectorAll('.project-heading');
        var projectDescription = document.querySelectorAll('.project-description');
        var projectSource = document.querySelectorAll('.project-source');
        var projectTag = document.querySelectorAll('.project-tag');

        var socialHeading = document.querySelectorAll('.social-heading');
        var socialLink = document.querySelectorAll('.social-link');
        
        var rohanImage = document.getElementById('rohan-image-container');

        var bottomText = document.getElementById('bottom-text');

        rohanImage.width = 400;
        rohanImage.height = 400;

        slideInProjectContainer.forEach((obj)=>{
            obj.style.width = 685;
            obj.style.height = 882;
        });
        projectImage.forEach((obj)=>{
            
        });
        projectHeading.forEach((obj)=>{
            obj.style.fontSize = 40;
        });
        projectDescription.forEach((obj)=>{
            obj.style.fontSize = 37;
        });
        projectSource.forEach((obj)=>{
            obj.style.fontSize = 35;
        }); 
        projectTag.forEach((obj)=>{
            obj.style.fontSize = 35;
        });

        socialHeading.forEach((obj)=>{
            obj.style.fontSize = 55;
        });
        socialLink.forEach((obj)=>{
            obj.style.fontSize = 45;
        });


        UICtrl.doms.headContainer.style.height='40%';
        UICtrl.doms.introHeader.style.fontSize=60;
        UICtrl.doms.introDescription.style.fontSize=50;
        UICtrl.doms.contentSelector.forEach((obj)=>{
            obj.style.fontSize=50;
        });
        UICtrl.doms.logoImage.width = "300";
        UICtrl.doms.logoImage.height = "300";

        UICtrl.doms.rohanText.style.fontSize = 80;

        UICtrl.doms.sideMainText.style.fontSize = 50;

        slideInHeader.forEach((header)=>{
            header.style.fontSize = 50;
        })
        slideInDescription.forEach((description)=>{
            description.style.fontSize = 44;
        })

        bottomText.style.fontSize = 20;

    }

    var setupEventListeners = function(){
        document.addEventListener('resize',UICtrl.mainTextSize);
        UICtrl.doms.sideMainText.addEventListener('click',()=>{
            UICtrl.doms.sideMainText.style.padding='0 256 0 256';
            setTimeout(()=>{UICtrl.doms.sideMainText.style.padding='0 24 0 24'},700)
        });

        UICtrl.doms.contentSelector.forEach((object,index)=>{
            object.addEventListener('mouseenter',()=>{UICtrl.doms.contentSelectorText[index].classList.add('content-selector-text-hover')});
            object.addEventListener('mouseleave',()=>{UICtrl.doms.contentSelectorText[index].classList.remove('content-selector-text-hover')});
        })
        

        UICtrl.doms.contentSelector.forEach((ele)=>{
            ele.addEventListener('click',()=>{
                UICtrl.addUnderline(ele);
                UICtrl.bringInPanel(ele.id[ele.id.length-1]);
                //console.log(ele.id[ele.id.length-1],ele.id,ele)
            })
        });
        
    }

    return{

        openURL: function(id){
            //console.log('click',id)
            open(UICtrl.projectBtnLink[UICtrl.projectBtnLink.findIndex((obj)=>{return obj.btnNo===id})].link);
        },

        init : function(){
            setupEventListeners();
            UICtrl.windowSizeController();

            UICtrl.doms.projectPage.innerHTML = '';
            MyProjects.projectList.forEach((project)=>{
                UICtrl.createProjectContainer(project);
            });

            UICtrl.doms.aboutPage.innerHTML = '';
            MyAbouts.aboutList.forEach((about)=>{
                UICtrl.createAboutContainer(about);
            })

            var isMobile =  window.mobileCheck();

            if(isMobile){
                rearrangeForMobile();
            }

            var dob = 2002;
            var date = new Date();
            var age = date.getFullYear()-dob;
            UICtrl.setSideText(age,document.querySelectorAll('.slide-in-project-container').length,21);
            UICtrl.mainTextAnimation();

            


            //debug
            var ele = document.getElementById('btn-1');
            UICtrl.addUnderline(ele);
            UICtrl.bringInPanel(ele.id[ele.id.length-1])
        }
    }
})(UIController);

window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

onload = controller.init;
onresize = UIController.windowSizeController;