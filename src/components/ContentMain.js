import React, { Component } from 'react'
import ContentStr from './subComponents/ContentStr';
import ContentFourPhotos from './subComponents/ContentFourPhotos';
import ContentFirstTable from './subComponents/ContentFirstTable';
import ContentSecondTable from './subComponents/ContentSecondTable';
import ContentThirdTable from './subComponents/ContentThirdTable';
import ContentBottomCharts from './subComponents/ContentBottomCharts';
// import NewPage from './NewPage';
// import { Route } from 'react-router';

export default class ContentMain extends Component {
    render() {
        return (
            <div>
                <div className="content">
                    
                    <ContentStr />

                    <ContentFourPhotos />

                    <ContentFirstTable />

                    <ContentSecondTable />

                    <ContentThirdTable />

                    <ContentBottomCharts />
                </div>
            </div>
        )
    }
}
