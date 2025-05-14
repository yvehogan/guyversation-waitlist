"use client";

import { AddUserDialog } from "@/components/modules/admin/user-management/add-user-dialog";
import { ConfirmAddUserDialog, SuccessAddUserDialog } from "@/components/modules/admin/user-management/confirm-and-add-user-dialog";
import { FilterTabs } from "@/components/modules/admin/user-management/filter-tabs";
import { ConfirmRevokeAccessDialog, SuccessRevokeAccessDialog } from "@/components/modules/admin/user-management/request-access-dialog";
import { ConfirmRequestDialog, SuccessRequestDialog } from "@/components/modules/admin/user-management/request-dialog";
import { RequestsTable } from "@/components/modules/admin/user-management/requests-table";
import { TabNavigation } from "@/components/modules/admin/user-management/tab-navigation";
import { UserManagementHeader } from "@/components/modules/admin/user-management/user-header";
import { UserProfileDialog } from "@/components/modules/admin/user-management/user-profile-dialog";
import { UserInterface, UsersTable } from "@/components/modules/admin/user-management/user-table";
import { useState } from "react";

export default function UserManagementPage() {
  // State for dialogs
  const [addUserOpen, setAddUserOpen] = useState(false);
  const [confirmAddOpen, setConfirmAddOpen] = useState(false);
  const [successAddOpen, setSuccessAddOpen] = useState(false);
  const [confirmRevokeOpen, setConfirmRevokeOpen] = useState(false);
  const [successRevokeOpen, setSuccessRevokeOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [confirmRequestOpen, setConfirmRequestOpen] = useState(false);
  const [successRequestOpen, setSuccessRequestOpen] = useState(false);
  
  // State for user data
  const [selectedUser, setSelectedUser] = useState<UserInterface | null>(null);
  const [viewingUser, setViewingUser] = useState<UserInterface | null>(null);
  const [email, setEmail] = useState("");
  const [userRole, setUserRole] = useState("");
  
  // State for UI
  const [activeTab, setActiveTab] = useState("all-users");
  const [activeFilter, setActiveFilter] = useState("All Users");
  const [profileTab, setProfileTab] = useState("profile");

  // Sample users data
  const users: UserInterface[] = [
    {
      id: 1,
      name: "Ezekiel David Ayo",
      type: "Mentee",
      status: "Active",
      location: "Lagos, Nigeria",
      time: "Today",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Ezekiel David Ayo",
      type: "Mentor",
      status: "Active",
      location: "Abuja, Nigeria",
      time: "5 days ago",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Ezekiel David Ayo",
      type: "Mentee",
      status: "Active",
      location: "Lagos, Nigeria",
      time: "1 week ago",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "Anonymous",
      type: "Anonymous",
      status: "-",
      location: "-",
      time: "2 weeks ago",
    },
    {
      id: 5,
      name: "Ezekiel David Ayo",
      type: "School",
      status: "Active",
      location: "Abuja, Nigeria",
      time: "2 weeks ago",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 6,
      name: "Ezekiel David Ayo",
      type: "Mentor",
      status: "Pending",
      location: "Lagos, Nigeria",
      time: "3 weeks ago",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 7,
      name: "Anonymous",
      type: "Anonymous",
      status: "-",
      location: "-",
      time: "30 Nov, 2025",
    },
    {
      id: 8,
      name: "Ezekiel David Ayo",
      type: "Mentor",
      status: "Active",
      location: "Abuja, Nigeria",
      time: "30 Nov, 2025",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 9,
      name: "Ezekiel David Ayo",
      type: "School",
      status: "Active",
      location: "Abuja, Nigeria",
      time: "30 Nov, 2025",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 10,
      name: "Ezekiel David Ayo",
      type: "Mentor",
      status: "Pending",
      location: "Lagos, Nigeria",
      time: "30 Nov, 2025",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 11,
      name: "Ezekiel David Ayo",
      type: "School",
      status: "Active",
      location: "Abuja, Nigeria",
      time: "30 Nov, 2025",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 12,
      name: "Anonymous",
      type: "Anonymous",
      status: "-",
      location: "-",
      time: "30 Nov, 2025",
    },
  ];

  // Filter users based on active filter
  const filteredUsers = users.filter((user) => {
    if (activeFilter === "All Users") return true;
    return user.type === activeFilter;
  });

  // Event handlers
  const handleAddUser = (email: string, role: string) => {
    setEmail(email);
    setUserRole(role);
    setAddUserOpen(false);
    setConfirmAddOpen(true);
  };

  const handleConfirmAdd = () => {
    setConfirmAddOpen(false);
    setSuccessAddOpen(true);
  };

  const handleRevokeAccess = (user: UserInterface) => {
    setSelectedUser(user);
    setConfirmRevokeOpen(true);
  };

  const handleConfirmRevoke = () => {
    setConfirmRevokeOpen(false);
    setSuccessRevokeOpen(true);
  };

  const handleViewProfile = (user: UserInterface) => {
    setViewingUser(user);
    setProfileOpen(true);
  };

  const handleViewRequest = (user: UserInterface) => {
    setViewingUser(user);
    setProfileOpen(true);
  };

  const handleAcceptRequest = () => {
    setConfirmRequestOpen(false);
    setSuccessRequestOpen(true);
  };

  return (
    <>
      <main className="flex-1 overflow-y-auto pb-24 mt-8">
        <UserManagementHeader onAddUser={() => setAddUserOpen(true)} />
        
        <TabNavigation 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />

        {activeTab === "all-users" && (
          <div className="overflow-hidden px-4 rounded-[30px] bg-white pb-24">
            <FilterTabs
              filters={[
                "All Users",
                "Mentee",
                "Mentor",
                "School",
                "Anonymous",
                "Parent",
              ]}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
            <UsersTable 
              users={filteredUsers} 
              onViewProfile={handleViewProfile}
              onRevokeAccess={handleRevokeAccess}
            />
          </div>
        )}

        {activeTab === "requests" && (
          <div className="overflow-hidden px-4 rounded-[30px] bg-white pb-24">
            <FilterTabs
              filters={["All Users", "Mentee", "Anonymous"]}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
            <RequestsTable 
              users={filteredUsers.slice(0, 6)} 
              onViewRequest={handleViewRequest}
            />
          </div>
        )}
      </main>

      {/* Dialogs */}
      <AddUserDialog
        open={addUserOpen}
        onOpenChange={setAddUserOpen}
        onAddUser={handleAddUser}
      />

      <ConfirmAddUserDialog
        open={confirmAddOpen}
        onOpenChange={setConfirmAddOpen}
        onConfirm={handleConfirmAdd}
        email={email}
        role={userRole}
      />

      <SuccessAddUserDialog
        open={successAddOpen}
        onOpenChange={setSuccessAddOpen}
      />

      <ConfirmRevokeAccessDialog
        open={confirmRevokeOpen}
        onOpenChange={setConfirmRevokeOpen}
        onConfirm={handleConfirmRevoke}
      />

      <SuccessRevokeAccessDialog
        open={successRevokeOpen}
        onOpenChange={setSuccessRevokeOpen}
        user={selectedUser}
      />

      <UserProfileDialog
        open={profileOpen}
        onOpenChange={setProfileOpen}
        user={viewingUser}
        isRequest={activeTab === "requests"}
        onAcceptRequest={() => setConfirmRequestOpen(true)}
      />

      <ConfirmRequestDialog
        open={confirmRequestOpen}
        onOpenChange={setConfirmRequestOpen}
        onConfirm={handleAcceptRequest}
      />

      <SuccessRequestDialog
        open={successRequestOpen}
        onOpenChange={setSuccessRequestOpen}
      />
    </>
  );
}