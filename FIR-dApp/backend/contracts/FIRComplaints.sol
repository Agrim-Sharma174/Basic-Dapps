// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract FIRComplaints {
    address public officer;
    address public owner;
    uint256 public ComplaintId;

    uint256[] public pendingApprovals;
    uint256[] public pendingResolution;
    uint256[] public resolvedCases;

    constructor(address _officer) {
        owner = msg.sender;
        officer = _officer;
        ComplaintId = 1;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "You are not the owner");

        _;
    }

    modifier onlyOfficer() {
        require(msg.sender == officer, "You are not the officer");

        _;
    }

    struct complaint {
        uint256 id;
        address complainant;
        string title;
        string description;
        string approvalRemarks;
        string resolutionRemark;
        bool isApproved;
        bool isResolved;
        bool exists;
    }

    mapping(uint256 => complaint) public Complaints;

    event complaintFiled(uint256 id, address complaintant, string title);

    function fileComplaint(
        string memory _title,
        string memory _description
    ) public {
        complaint storage newComplaint = Complaints[ComplaintId];
        newComplaint.id = ComplaintId;
        newComplaint.complainant = msg.sender;
        newComplaint.title = _title;
        newComplaint.description = _description;
        newComplaint.approvalRemarks = "Pending Approval";
        newComplaint.resolutionRemark = "Pending Resolution";
        newComplaint.isApproved = false;
        newComplaint.isResolved = false;
        newComplaint.exists = true;
        emit complaintFiled(ComplaintId, msg.sender, _title);

        ComplaintId++;
    }

    function approveComplaint(
        uint256 _id,
        string memory _approvalRemark
    ) public onlyOfficer {
        require(Complaints[_id].exists == true, "Complaint does not exist");
        require(
            Complaints[_id].isApproved == false,
            "Complaint has already been approved"
        );
        Complaints[_id].isApproved = true;
        Complaints[_id].approvalRemarks = _approvalRemark;
    }

    // function declineComplaint(
    //     uint256 _id,
    //     string memory _approvalRemark
    // ) public onlyOfficer {
    //     require(Complaints[_id].exists == true, "Complaint does not exist");
    //     require(
    //         Complaints[_id].isApproved == false,
    //         "Complaint has already been approved"
    //     );
    //     Complaints[_id].exists = false;
    //     Complaints[_id].approvalRemarks = string.concat(
    //         "This complaint is rejected. Reason: ",
    //         _approvalRemark
    //     );
    // }

    function declineComplaint(
        uint256 _id,
        string memory _approvalRemark
    ) public onlyOfficer {
        require(Complaints[_id].exists == true, "Complaint does not exist");
        require(
            Complaints[_id].isApproved == false,
            "Complaint has already been approved"
        );
        Complaints[_id].exists = false;
        Complaints[_id].approvalRemarks = string(
            abi.encodePacked(
                "This complaint is rejected. Reason: ",
                _approvalRemark
            )
        );
    }

    function resolveComplaint(
        uint256 _id,
        string memory _resolutionRemark
    ) public onlyOfficer {
        require(Complaints[_id].exists == true, "Complaint does not exist");
        require(
            Complaints[_id].isApproved == true,
            "Complaint has not been approved"
        );
        require(
            Complaints[_id].isResolved == false,
            "Complaint has already been resolved"
        );
        Complaints[_id].isResolved = true;
        Complaints[_id].resolutionRemark = _resolutionRemark;
    }

    function calcuPendingApprovalIds() public {
        delete pendingApprovals;
        for (uint256 i = 1; i < ComplaintId; i++) {
            if (
                Complaints[i].isApproved == false &&
                Complaints[i].exists == true
            ) {
                pendingApprovals.push(Complaints[i].id);
            }
        }
    }

    function calcuPendingResolutionIds() public {
        delete pendingResolution;
        for (uint256 i = 1; i < ComplaintId; i++) {
            if (
                Complaints[i].isResolved == false &&
                Complaints[i].isApproved == true &&
                Complaints[i].exists == true
            ) {
                pendingResolution.push(Complaints[i].id);
            }
        }
    }

    function calcResolvedIds() public {
        delete resolvedCases;
        for (uint256 i = 1; i < ComplaintId; i++) {
            if (Complaints[i].isResolved == true) {
                resolvedCases.push(Complaints[i].id);
            }
        }
    }

    function setOfficerAddress(address _officer) public onlyOwner {
        owner = _officer;
    }
}
