import React from 'react'
import {JobListWrapper, JobListItem, JobListItemDesc, CallToAction, Flex} from './JobListCss'
import Fade from 'react-reveal/Fade';
const JobList = ({ads, openAd}) => {
    
        if (!ads){
            return null
        }
        else {
            const ListOfJobAds = ads.map( ads => {
                let {descr, id, company, title, experience, employment_type, locations, urls} = ads;
                return (
                    <Fade left big>
                        <JobListItem key={id} onClick={openAd}>
                            <Flex direction="row" justify="space-between" >
                                <div>
                                    <Flex direction="column" justify="center" alignItems="center">
                                        <img height="48px" width="48px" src={company.logo} alt={company.name}/>
                                        {company.website? <a href={company.website} rel="noopener noreferrer" target="_blank"><p>{company.name}</p></a>:<p> {company.name}</p>}
                                    </Flex>
                                    <Flex direction="column">
                                        <p>{title}</p>
                                        {locations[0].location.url ? <a href={locations[0].location.url} rel="noopener noreferrer" target="_blank"><p>{locations[0].location.text}</p></a> : <p>{locations[0].location.text}</p>}
                                    </Flex>
                                    <Flex direction="column">
                                        <p> Experience: {experience}</p>
                                        <p> Capacity: {employment_type}</p>
                                    </Flex>
                                </div>
                                <CallToAction><a href={urls.ad} target="_blank" rel="noopener noreferrer">Apply For Job</a></CallToAction>
                            </Flex>
                            <JobListItemDesc dangerouslySetInnerHTML={{ __html: descr }}></JobListItemDesc>
                        </JobListItem>
                    </Fade>
                )
            })
        return(
            <React.Fragment>
                    <JobListWrapper>{ListOfJobAds}</JobListWrapper>
            </React.Fragment>
        )
    }

}

export default JobList
