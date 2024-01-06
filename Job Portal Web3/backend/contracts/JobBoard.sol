// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.19;

contract JobBoard {
    uint256 public JOB_ID = 0;
    // Creating a Job Struct to take all the necessary properties
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
    Job[] public jobsArray;


    // Taking in the necessary parameters and pushing the struct to the array
    function addJob(
        string memory _title,
        string memory _companyName,
        string memory _description,
        string memory _employmentType,
        string memory _location,
        uint _salary,
        string memory _applyUrl,
        string memory _contactEmail
    )