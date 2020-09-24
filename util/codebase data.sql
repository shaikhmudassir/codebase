-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Sep 24, 2020 at 04:47 AM
-- Server version: 5.5.39
-- PHP Version: 5.4.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `codebase`
--

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE IF NOT EXISTS `post` (
`Id` int(11) NOT NULL,
  `title` text NOT NULL,
  `description` text NOT NULL,
  `code` text NOT NULL,
  `image` tinyint(1) NOT NULL DEFAULT '1',
  `descOut` text NOT NULL,
  `topicId` int(11) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`Id`, `title`, `description`, `code`, `image`, `descOut`, `topicId`) VALUES
(1, 'Design an applet/application to demonstrate the use of Radio Button and Checkbox.', '', 'import java.applet.*;\r\nimport java.awt.*;\r\n\r\n// <applet code="p1" width="200" height="300"></applet>\r\npublic class p1 extends Applet\r\n{\r\n    public void init()\r\n    {\r\n        Checkbox c1 = new Checkbox("Java");\r\n        Checkbox c2 = new Checkbox("C++");\r\n        Checkbox c3 = new Checkbox("python");\r\n        CheckboxGroup cbg = new CheckboxGroup();\r\n        Checkbox cb1 = new Checkbox("First Year",cbg,true);\r\n        Checkbox cb2 = new Checkbox("Second  Year",cbg,false);\r\n        Checkbox cb3 = new Checkbox("Thrid  Year",cbg,false);\r\n        add(c1);\r\n        add(c2);\r\n        add(c3);\r\n        add(cb1);\r\n        add(cb2);\r\n        add(cb3);\r\n    }\r\n}\r\n', 0, '', 1),
(2, 'Design an applet/application to create form using Text Field, Text Area, Button and Label.', '', 'import java.applet.*;\r\nimport java.awt.*;\r\n\r\n// <applet code="p1" width="200" height="300"></applet>\r\npublic class p1 extends Applet\r\n{\r\n    public void init()\r\n    {\r\n        Label l1 = new Label("Username");\r\n        Label l2 = new Label("Password");\r\n        Label l3 = new Label("FeedBack");\r\n        TextField t1 = new TextField(10);\r\n        TextField t2 = new TextField(10);\r\n        TextArea a = new TextArea(5,12);\r\n        Button btn = new Button("Submit"); \r\n\r\n        add(l1);\r\n        add(t1);\r\n        add(l2);\r\n        add(t2);\r\n        add(l3);\r\n        add(a);\r\n        add(btn);\r\n    }\r\n}', 0, '', 1),
(3, 'Develop a program using Label to display message “Welcome to Java”.', '', 'import java.applet.*;\r\nimport java.awt.*;\r\n\r\n// <applet code="p1" width="200" height="300"></applet>\r\npublic class p1 extends Applet\r\n{\r\n    public void init()\r\n    {\r\n         Label l1 = new Label("Welcome to Java");\r\n        add(l1);\r\n    }\r\n}', 0, '', 1),
(4, 'Develop a program to select multiple languages known to user. (e. g Marathi, Hindi, English, Sanskrit).', '', 'import java.applet.*;\r\nimport java.awt.*;\r\n\r\n// <applet code="p1" width="200" height="300"></applet>\r\npublic class p1 extends Applet\r\n{\r\n    public void init()\r\n    {\r\n        Checkbox cb1 = new Checkbox("English"); \r\n        Checkbox cb2 = new Checkbox("Marathi"); \r\n        Checkbox cb3 = new Checkbox("Hindi"); \r\n        Checkbox cb4 = new Checkbox("Urdu");\r\n\r\n        add(cb1);\r\n        add(cb2);\r\n        add(cb3);\r\n        add(cb4);\r\n\r\n    }\r\n}', 0, '', 1),
(5, 'Write a program to create three Buttons with Caption OK, RESET and CANCEL.', '', 'import java.applet.*;\r\nimport java.awt.*;\r\n\r\n// <applet code="p1" width="200" height="300"></applet>\r\npublic class p1 extends Applet\r\n{\r\n    public void init()\r\n    {\r\n        Button btn1 = new Button("OK");  \r\n        Button btn2 = new Button("RESET");  \r\n        Button btn3 = new Button("CANCEL");\r\n\r\n        add(btn1);   \r\n        add(btn2);   \r\n        add(btn3);\r\n\r\n    }\r\n}', 0, '', 1),
(6, 'Write Java Program to show following output.', '', 'import java.awt.*;\r\nimport java.applet.*;\r\n\r\n// <applet code="p2" width="200" height="300"></applet>\r\n\r\npublic class p2 extends Applet\r\n{\r\n    public void init()\r\n    {\r\n        List l1 = new List(4);\r\n\r\n        l1.addItem("Summer");\r\n        l1.addItem("Winter");\r\n        l1.addItem("Rainy");\r\n        add(l1);\r\n    }\r\n}', 1, '', 2),
(7, 'Develop an applet/ application using List components to add names of 10 different cities.', '', 'import java.awt.*;\r\nimport java.applet.*;\r\n\r\n// <applet code="p2" width="200" height="300"></applet>\r\n\r\npublic class p2 extends Applet\r\n{\r\n    public void init()\r\n    {\r\n        String[] cities = {"Aurangabad",\r\n            "Mumbai",\r\n            "Pune",\r\n            "Nagpur",\r\n            "Kolkata",\r\n            "Nasik",\r\n            "Chennai",\r\n            "Kanpur",\r\n            "Hyderabad",\r\n            "Ahmednagar"\r\n        };\r\n        \r\n        List l1 = new List(8);\r\n        for(int i=0; i < cities.length; i++)\r\n        {\r\n            l1.addItem(cities[i]);\r\n        }\r\n        add(l1);\r\n    }\r\n}', 0, '', 2),
(8, 'Develop applet / application to select multiple names of news papers', '', 'import java.awt.*;\r\nimport java.applet.*;\r\n\r\n// <applet code="p2" width="200" height="300"></applet>\r\n\r\npublic class p2 extends Applet\r\n{\r\n    public void init()\r\n    {\r\n        String[] newspaper = {\r\n            "Times of India",\r\n            "New York Times",\r\n            "Lokmat Times",\r\n            "Aurangabad Times"\r\n        };\r\n        List l1 = new List(4,true);\r\n        for(int i=0; i < newspaper.length; i++)\r\n        {\r\n            l1.addItem(newspaper[i]);\r\n        }\r\n        add(l1);\r\n    }\r\n}', 0, '', 2),
(9, 'Write java Program to Demonstrate Grid of 5* 5.', '', 'import java.awt.*;\r\nimport java.applet.*;\r\n\r\n//<applet code="p3" width="300" height="400"></applet>\r\n\r\npublic class p3 extends Applet\r\n{\r\n    public void init()\r\n    {\r\n        for(int i=0; i < 25; i++)\r\n        {\r\n            add(new Button(String.valueOf(i+1)));\r\n        }\r\n        setLayout(new GridLayout(5,5));\r\n    }\r\n}', 0, '', 3),
(10, 'Write a program to display The Number on Button from 0 to 9.', '', 'import java.awt.*;\r\nimport java.applet.*;\r\n\r\n//<applet code="p3" width="300" height="400"></applet>\r\n\r\npublic class p3 extends Applet\r\n{\r\n    public void init()\r\n    {\r\n        for(int i=0; i < 10; i++)\r\n        {\r\n            add(new Button(String.valueOf(i)));\r\n        }\r\n        setLayout(new GridLayout(4,3));\r\n    }\r\n}', 0, '', 3),
(11, 'Write a program to generate following output.', '', 'import java.awt.*;\r\nimport java.applet.*;\r\n\r\npublic class p3 extends Frame\r\n{\r\n    p3()\r\n    {\r\n        for(int i=0; i < 5; i++)\r\n        {\r\n            add(new Button("Button " + String.valueOf(i+1)));\r\n        }\r\n        setLayout(new GridLayout(3,2,10,10));\r\n        setTitle("GridLayout Demo");\r\n        setSize(400,200);\r\n        setVisible(true);\r\n    }\r\n\r\n    public static void main(String args[])\r\n    {\r\n        new p3(); \r\n    }\r\n}', 0, '', 3),
(12, 'Write a program to generate following output using Border Layout.', '', 'import java.awt.*;\r\nimport java.applet.*;\r\n\r\n//<applet code="p3" width="300" height="150"></applet>\r\n\r\npublic class p3 extends Applet\r\n{\r\n    public void init()\r\n    {\r\n        Button b1 = new Button("North");\r\n        Button b2 = new Button("East");\r\n        Button b3 = new Button("South");\r\n        Button b4 = new Button("West");\r\n        Button b5 = new Button("Center");\r\n\r\n        setLayout(new BorderLayout());\r\n\r\n        add(b1,BorderLayout.NORTH);\r\n        add(b2,BorderLayout.EAST);\r\n        add(b3,BorderLayout.SOUTH);\r\n        add(b4,BorderLayout.WEST);\r\n        add(b5,BorderLayout.CENTER);\r\n\r\n    }\r\n}', 0, '', 3);

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE IF NOT EXISTS `subject` (
`Id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`Id`, `title`, `description`) VALUES
(1, 'java-manual-2020', 'This subject contain all the programs of Advanced java programming of MSBTE.');

-- --------------------------------------------------------

--
-- Table structure for table `topic`
--

CREATE TABLE IF NOT EXISTS `topic` (
`Id` int(11) NOT NULL,
  `topic` varchar(200) NOT NULL,
  `subject` varchar(200) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `topic`
--

INSERT INTO `topic` (`Id`, `topic`, `subject`) VALUES
(1, 'Practical No. 1', 'java-manual-2020'),
(2, 'Practical No. 2', 'java-manual-2020'),
(3, 'Practical No. 3', 'java-manual-2020');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `post`
--
ALTER TABLE `post`
 ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `subject`
--
ALTER TABLE `subject`
 ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `topic`
--
ALTER TABLE `topic`
 ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `subject`
--
ALTER TABLE `subject`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `topic`
--
ALTER TABLE `topic`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
