'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin } from 'lucide-react'

interface AddAddressFormProps {
  onSubmit: (e: React.FormEvent) => void
}

export function AddAddressForm({ onSubmit }: AddAddressFormProps) {
  return (
    <div className="bg-white rounded-lg p-6 space-y-6">
        

      <Button 
        variant="default" 
        className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
      >
        <MapPin className="w-4 h-4" />
        Use my current address
      </Button>
      

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            placeholder="Enter Name"
            name="name"
            required
          />
          <Input
            placeholder="House no / flat"
            name="houseNumber"
            required
          />
          <Input
            placeholder="Enter Landmark"
            name="landmark"
            required
          />
          <Input
            placeholder="Mobile Number"
            name="mobile"
            type="tel"
            required
          />
          <Input
            placeholder="Village / area"
            name="village"
            required
          />
          <Input
            placeholder="City"
            name="city"
            required
          />
          <Input
            placeholder="Pincode"
            name="pincode"
            required
          />
          <Input
            placeholder="State"
            name="state"
            required
          />
          <Input
            placeholder="alternative mobile number"
            name="alternativeMobile"
            type="tel"
          />
          <Input
            placeholder="Label  Example: home, office..."
            name="label"
          />
        </div>
        
        <Button 
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white"
        >
          Save
        </Button>
      </form>
    </div>
  )
}

