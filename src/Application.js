import React, {Component} from 'react';
import {getOriginalServerPort} from './api/restfulAPI';
import {Container} from 'reactstrap';
import ErrorBanner from "./ErrorBanner";
import Home from "./components/Home";
import About from "./components/About";


export default class Application extends Component {
    constructor(props) {
        super(props);

        this.state = {
            serverConfig: null,
            currentWindowWidth: window.innerWidth,
            clientSettings: {
                serverPort: getOriginalServerPort()
            },
            errorMessage: null
        };
        this.windowSizeChange = this.windowSizeChange.bind(this);
        window.addEventListener('resize', this.windowSizeChange);
    }
    render() {
        // let pageToRender = this.state.serverConfig ? this.props.page : 'settings';
        let pageToRender = this.props.page ? this.props.page : 0;
        return (
            <div className='application-width'>
                { this.state.errorMessage }{ this.createApplicationPage(pageToRender) }
            </div>
        );
    }

    createErrorBanner(statusText, statusCode, message) {
        return (
            <ErrorBanner statusText={statusText}
                         statusCode={statusCode}
                         message={message}/>
        );
    }

    createApplicationPage(pageToRender) {
        switch(pageToRender) {
            case 'about':
                return (
                    <div>
                        <About setAppPage={this.props.setAppPage}/>
                    </div>);
            default:
                return <Home pages={this.props.pages}
                             setAppPage={this.props.setAppPage}/>;
        }
    }

    processConfigResponse(config) {
        if(config.statusCode >= 200 && config.statusCode <= 299) {
            console.log("Switching to server ", this.state.clientSettings.serverPort);
            this.setState({
                serverConfig: config.body,
                errorMessage: null
            });
        }
        else {
            this.setState({
                serverConfig: null,
                errorMessage:
                    <Container>
                        {this.createErrorBanner(config.statusText, config.statusCode,
                            `Failed to fetch config from ${ this.state.clientSettings.serverPort}. Please choose a valid server.`)}
                    </Container>
            });
        }
    }

    windowSizeChange() {
        this.setState({currentWindowWidth: window.innerWidth});
    };


}