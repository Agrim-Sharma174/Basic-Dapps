// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.19;

contract JobBoard {
    uint256 public JOB_ID = 0;
    // let's create a struct to get all necessary data for a job
    struct Job {
        string title;
        string companyName;
        string description;
        string employmentType;
        string location;
        uint salary;
        string applyUrl;
        string contactEmail;
    }
    // to store all jobs
    Job[] public jobsArray;

    // to store all jobs by employer
    function addJob(
        string memory _title,
        string memory _companyName,
        string memory _description,
        string memory _employmentType,
        string memory _location,
        uint _salary,
        string memory _applyUrl,
        string memory _contactEmail    
    ) public {
        jobsArray.push(Job(_title, _companyName, _description, _employmentType, _location, _salary, _applyUrl, _contactEmail));
    }
    
    // to get all jobs
    function getJobs() public view returns(Job[] memory) {
        return jobsArray;
    }

    // deleting a job
    function deleteJob(uint _index) public {
        delete jobsArray[_index];
    }

    //total jobs posted
    function totalJobs() public view returns(uint) {
        return jobsArray.length;
    }

}