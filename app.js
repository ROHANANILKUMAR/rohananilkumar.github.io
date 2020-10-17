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

    var mediaStream = Object.create(Project,{
        title:{value:'The Media Stream'},
        description:{value:'A server client software which can save and retrieve files from the server'},
        image:{value: 'Images/Rohan.jpg'},
        sources: {value: [Object.create(Source,{text:{value:"Repo"},link:{value:'https://github.com/ROHANANILKUMAR/TheMediaStream'}})]},
        tags:{value:['Python']}
    })

    var memoryGame = Object.create(Project,{
        title:{value:'Memory Game'},
        description:{value:'blah blah blah'},
        image:{value: 'Images/Rohan.jpg'},
        sources: {value: [Object.create(Source,{text:{value:"Repo"},link:{value:'https://github.com/ROHANANILKUMAR/MemoryGame'}}), Object.create(Source,{text:{value:'Game'}, link:{value:''}})]},
        tags:{value:['JavaScript']}
    })

    var budgety = Object.create(Project,{
        title:{value:'Budgety'},
        description:{value:'blah blah blah'},
        image:{value: 'Images/Rohan.jpg'},
        sources: {value: [Object.create(Source,{text:{value:"Repo"},link:{value:'https://github.com/ROHANANILKUMAR/Budgety'}}), Object.create(Source,{text:{value:'Game'}, link:{value:''}})]},
        tags:{value:['JavaScript']}
    })

    var libraryManager = Object.create(Project,{
        title:{value:'Library Manager'},
        description:{value:'blah blah blah'},
        image:{value: 'Images/Rohan.jpg'},
        sources: {value: [Object.create(Source,{text:{value:"Repo"},link:{value:'https://github.com/ROHANANILKUMAR/LibraryManager'}})]},
        tags:{value:['C#']}
    })

    var ticTacToe = Object.create(Project,{
        title:{value:'TicTacToe'},
        description:{value:'blah blah blah'},
        image:{value: 'Images/Rohan.jpg'},
        sources: {value: [Object.create(Source,{text:{value:"Repo"},link:{value:'https://github.com/ROHANANILKUMAR/TicTacToe'}})]},
        tags:{value:['Python']}
    })

    var blackJack = Object.create(Project,{
        title:{value:'BlackJack'},
        description:{value:'blah blah blah'},
        image:{value: 'Images/Rohan.jpg'},
        sources: {value: [Object.create(Source,{text:{value:"Repo"},link:{value:'https://github.com/ROHANANILKUMAR/BlackJack'}})]},
        tags:{value:['Python']}
    })

    var crypto = Object.create(Project,{
        title:{value:'File Encryptor'},
        description:{value:'blah blah blah'},
        image:{value: 'Images/Rohan.jpg'},
        sources: {value: [Object.create(Source,{text:{value:"Repo"},link:{value:'https://github.com/ROHANANILKUMAR/CryptoFileEncryptor'}})]},
        tags:{value:['C#']}
    })

    var weatherAnalyser = Object.create(Project,{
        title:{value:'Weather Analyser'},
        description:{value:'blah blah blah'},
        image:{value: 'Images/Rohan.jpg'},
        sources: {value: [Object.create(Source,{text:{value:"Repo"},link:{value:'https://github.com/ROHANANILKUMAR/WeatherAnalyser'}})]},
        tags:{value:['C#','Python','C','Hardware']}
    })

    var smartHome = Object.create(Project,{
        title:{value:'Smart Home'},
        description:{value:'blah blah blah'},
        image:{value: 'Images/Rohan.jpg'},
        sources: {value: [Object.create(Source,{text:{value:"Repo"},link:{value:'https://github.com/ROHANANILKUMAR/SmartHome'}})]},
        tags:{value:['C#','C','Hardware']}
    })

    var passwordEncryptor = Object.create(Project,{
        title:{value:'Password Encrptor'},
        description:{value:'blah blah blah'},
        image:{value: 'Images/Rohan.jpg'},
        sources: {value: [Object.create(Source,{text:{value:"Repo"},link:{value:'https://github.com/ROHANANILKUMAR/PasswordEncryptor'}})]},
        tags:{value:['C#']}
    })

    var projectList=[
        libraryManager,
        mediaStream,
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

var UIController = (function(){
    var projectBtnLink = []
    var projectBtnNo = 1;

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
            newSourceTemplate = newSourceTemplate.replace('%Click%','controller.openURL('+projectBtnNo+')');
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

        doms.projectPage.insertAdjacentHTML('beforeend',finalHTML);

    }

    var doms ={
        mainText : document.querySelector('#main-text'),
        sideMainText : document.querySelector('#side-main-text'),
        age : document.getElementById('age'),
        projectsCount : document.getElementById('projects-count'),
        build : document.getElementById('build'),
        contentSelectorContainer: document.getElementById('content-selector-container'),
        contentSelector : document.querySelectorAll('.content-selector'),
        slideInPanels: document.querySelectorAll('.slide-in-panel'),
        slideInPanel1 : document.querySelector('#slide-in-panel-1'),
        slideInPanelContainer : document.querySelector('#slide-in-panel-container'),
        projectPage: document.getElementById('slide-in-panel-3'),
        projectsContainers: document.querySelectorAll('.slide-in-project-container')
     }

     var bringInPanel = function(panelId){
        var curPanel=document.getElementById('slide-in-panel-'+panelId);
        console.log(curPanel);
        //window.scrollBy(0,200);
        doms.slideInPanels.forEach((panel)=>{
            if(panel.id===('slide-in-panel-'+panelId)){
                panel.classList.add('slide-in-panel-visible');
            }
            else{
                panel.classList.remove('slide-in-panel-visible');
                panel.style.height = curPanel.style.height;
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
            doms.pageViews.textContent=pageViews;
            doms.age.textContent=age;
            doms.projectsCount.textContent=projectsCount;
        },

        windowSizeController: function(){
            var width = window.innerWidth;
            var height = window.innerHeight;
            if(width<998){
                doms.mainText.classList.add('main-text-narrow-window');
                console.log('small window');
            }
            else{
                doms.mainText.classList.remove('main-text-narrow-window')
            }
            if(width<512){
                doms.contentSelectorContainer.classList.add('content-selector-container-narrow-window');
            }
            else{
                doms.contentSelectorContainer.classList.remove('content-selector-container-narrow-window');

            }
        },

        pageViewUpdate : function(){
            var reader = new FileReader()
            console.log(reader.readAsText('Data/PageViews'))
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
        bringInPanel:bringInPanel,
        createProjectContainer:createProjectContainer,
        test: function(){
            doms.slideInPanel1.classList.add('slide-in-panel-visible');
            //doms.slideInPanelContainer.classList.remove('slide-in-panel-invisible');
        }
    }

})();

var controller = (function(UICtrl){

    var setupEventListeners = function(){
        document.addEventListener('resize',UICtrl.mainTextSize);
        UICtrl.doms.contentSelector.forEach((ele)=>{
            ele.addEventListener('click',()=>{
                UICtrl.addUnderline(ele);
                UICtrl.bringInPanel(ele.id[ele.id.length-1]);
                console.log(ele.id[ele.id.length-1],ele.id,ele)
            })
        });
        
    }

    return{

        openURL: function(id){
            console.log('click',id)
            open(UICtrl.projectBtnLink[UICtrl.projectBtnLink.findIndex((obj)=>{return obj.btnNo===id})].link);
        },

        init : function(){
            setupEventListeners();
            UICtrl.windowSizeController();

            UICtrl.doms.projectPage.innerHTML = '';
            MyProjects.projectList.forEach((project)=>{
                UICtrl.createProjectContainer(project);
            });

            var dob = 2002;
            var date = new Date();
            var age = date.getFullYear()-dob;
            UICtrl.setSideText(age,document.querySelectorAll('.slide-in-project-container').length,21);
            UICtrl.mainTextAnimation();

            


            //debug
            UICtrl.bringInPanel('1');
        }
    }
})(UIController);

onload = controller.init;
onresize = UIController.windowSizeController;