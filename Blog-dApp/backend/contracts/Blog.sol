// SPDX-Licence-Identifier: MIT

pragma solidity ^0.8.9;

contract Blog {
    struct blog {
        string title;
        string typeOf;
        string url;
        string description;
    }

    blog[] public blogArray;

    function setBlog(
        string memory _title,
        string memory _typeOf,
        string memory _url,
        string memory _description
    ) public {
        blogArray.push(blog(_title, _typeOf, _url, _description));
    }

    function getBlog() public view returns (blog[] memory) {
        return blogArray;
    }

    function deleteBlog(uint _index) public {
        blogArray[_index ]= blogArray[blogArray.length - 1];
        blogArray.pop();
    }

    function updateBlog(
        string memory _title,
        string memory _typeOf,
        string memory _url,
        string memory _description
    ) public {
        blogArray.push(blog(_title, _typeOf, _url, _description));
    }
}
